import { useMutation } from "@tanstack/react-query";
import { api, type ContactMessageInput } from "@shared/routes";

export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data: ContactMessageInput) => {
      const res = await fetch(api.contact.create.path, {
        method: api.contact.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        let errorMsg = "Failed to send message";
        try {
          const error = await res.json();
          errorMsg = error.message || errorMsg;
        } catch {
          // ignore parsing error
        }
        throw new Error(errorMsg);
      }
      
      return api.contact.create.responses[201].parse(await res.json());
    },
  });
}

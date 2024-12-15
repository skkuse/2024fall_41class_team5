describe("Integration Test: /api/v1/execution/add", () => {
    it("should return feedback for runtime errors in the submitted code", async () => {
      const requestBody = {
        id: 11,
        user_id: 2,
        problem_id: 42,
        creation_time: "2024-07-26T00:00:00",
        level: "Intermediate",
        memory_used: "150MB",
        elapsed_time: 0,
        user_code: `
            #include <stdio.h>
            int main() {
                int a, b;
                scanf("%d %d", &a, &b);
                printf("%d", a / b); 
                return 0;
            }`,
      };
  
      const response = await fetch("https://your-backend.com/api/v1/execution/add", {
        method: "POST",
        headers: {
          Authorization: "Bearer VALID_ACCESS_TOKEN",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
  
      const responseBody = await response.json();
  
      expect(response.status).toBe(400); 
      expect(responseBody.message).toBe("wrong");
      expect(responseBody.feedbacks).toContain("Runtime error detected: Division by zero.");
      expect(responseBody.feedbacks).toContain("Ensure that the denominator is not zero before performing division.");
    });
  });
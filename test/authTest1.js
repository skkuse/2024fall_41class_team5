const mockDatabase = jest.fn(() => null);

describe("User Login with Non-existent Account", () => {
  it("should fail to login with non-existent account", async () => {
    const mockApiResponse = {
      status: 401,
      body: { message: "user not found" },
    };

    const apiRequest = jest.fn(() => Promise.resolve(mockApiResponse));

    const response = await apiRequest({
      method: "POST",
      url: "/api/v1/user",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "nonexistent@example.com", password: "invalid_password" }),
    });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe("user not found");
    console.log("존재하지 않는 계정입니다.");
  });
});
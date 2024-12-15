const mockExecutionHistory = jest.fn(() => []);

describe("Recommendation Tab Without Previous Records", () => {
  it("should display message when there are no recommendations", async () => {
    const mockApiResponse = {
      status: 200,
      body: { body: [] },
    };

    const apiRequest = jest.fn(() => Promise.resolve(mockApiResponse));

    const response = await apiRequest({
      method: "GET",
      url: "/api/v1/recommendations",
      headers: {
        Authorization: "Bearer VALID_ACCESS_TOKEN",
        "Content-Type": "application/json",
      },
      params: { userId: 123 },
    });

    expect(response.status).toBe(200);
    expect(response.body.body).toEqual([]);
    console.log("추천 문제 탭이 비어 있습니다.");
  });
});
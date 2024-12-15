mockUser({ email: "user@example.com", password: "password123" });

describe("Login Page Validation", () => {
  it("should show warning when password is missing", () => {
    render(<LoginPage />);

    fireEvent.change(screen.getByPlaceholderText("Email"), { target: { value: "user@example.com" } });
    fireEvent.click(screen.getByText("Login"));

    expect(screen.getByText("비밀번호를 입력해 주세요")).toBeVisible();
    expect(apiRequest).not.toHaveBeenCalled();
  });
});
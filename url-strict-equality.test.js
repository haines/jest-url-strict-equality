describe("URL strict equality", () => {
  test("different URLs are not strictly equal", () => {
    expect(new URL("https://abc.xyz")).not.toStrictEqual(new URL("ftp://wat.no"))
  })
})

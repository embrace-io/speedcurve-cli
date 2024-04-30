const SpeedCurve = require("../dist");
const request = require("request-promise");
const SPEEDCURVE_API_KEY = "abc123";

test("SpeedCurve.urls.create() with basic options", async () => {
  request.post.mockResolvedValueOnce({
    status: "success",
    message: "Success!",
    url_id: 8081,
  });

  const response = await SpeedCurve.urls.create(SPEEDCURVE_API_KEY, {
    siteId: 326,
    url: "https://speedcurve.com/",
    label: "Home",
  });

  expect(response.status).toEqual("success");
  expect(request.post.mock.calls[0][0].form.site_id).toEqual("326");
  expect(request.post.mock.calls[0][0].form.url).toEqual("https://speedcurve.com/");
  expect(request.post.mock.calls[0][0].form.label).toEqual("Home");
});

test("SpeedCurve.urls.create() with script option", async () => {
  request.post.mockResolvedValueOnce({
    status: "success",
    message: "Success!",
    url_id: 8082,
  });

  const response = await SpeedCurve.urls.create(SPEEDCURVE_API_KEY, {
    siteId: 326,
    url: "https://speedcurve.com/",
    script: "navigate https://speedcurve.com",
  });

  expect(response.status).toEqual("success");
  expect(request.post.mock.calls[0][0].form.script).toEqual("navigate https://speedcurve.com");
});

test("SpeedCurve.urls.create() with username and password options", async () => {
  request.post.mockResolvedValueOnce({
    status: "success",
    message: "Success!",
    url_id: 8083,
  });

  const response = await SpeedCurve.urls.create(SPEEDCURVE_API_KEY, {
    siteId: 326,
    url: "https://speedcurve.com/",
    username: "testuser",
    password: "testpassword",
  });

  expect(response.status).toEqual("success");
  expect(request.post.mock.calls[0][0].form.username).toEqual("testuser");
  expect(request.post.mock.calls[0][0].form.password).toEqual("testpassword");
});

test("SpeedCurve.urls.update()", async () => {
  request.put.mockResolvedValueOnce({
    status: "success",
    message: "Success!",
    url_id: 8081,
  });

  const response = await SpeedCurve.urls.update(SPEEDCURVE_API_KEY, 8081, { label: "home" });

  expect(response.status).toEqual("success");
  expect(request.put.mock.calls[0][0].form.label).toEqual("home");
});

test("SpeedCurve.urls.update(script)", async () => {
  request.put.mockResolvedValueOnce({
    status: "success",
    message: "Success!",
    url_id: 8081,
  });

  const response = await SpeedCurve.urls.update(SPEEDCURVE_API_KEY, 8081, { script: "navigate	https://goodrx.com" });

  expect(response.status).toEqual("success");
  expect(request.put.mock.calls[0][0].form.script).toEqual("navigate	https://goodrx.com");
});

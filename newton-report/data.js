var data = {"skips":[],"suites":[{"name":"Breadcrumbs","suitePath":["Breadcrumbs"],"children":[{"name":"Breadcrumbs parse","suitePath":["Breadcrumbs","Breadcrumbs parse"],"children":[{"name":"should return empty path","suitePath":["Breadcrumbs","Breadcrumbs parse","should return empty path"],"browsers":[{"name":"chrome","result":{"suiteUrl":"http://localhost:3000/","name":"chrome","metaInfo":{"url":"/","file":"hermione/breadcrumbs.hermione.js","sessionId":"bc476c300e546850d654a189a2a1ce5b"},"imagesInfo":[],"screenshot":false,"multipleTabs":true,"code":"function () {\n            return this.browser\n                .url('/')\n                .getText('.breadcrumbs')\n                .then(function (text) {\n                return assert.ok(text === 'HISTORY', 'the .breadcrumbs returns not correct text');\n            });\n        }","status":"success","attempt":2},"retries":[{"suiteUrl":"http://localhost:3000/","name":"chrome","metaInfo":{"url":"/","file":"hermione/breadcrumbs.hermione.js","sessionId":"e5cec7231a14b8dc927ab207bada515c"},"imagesInfo":[],"screenshot":false,"multipleTabs":true,"code":"function () {\n            return this.browser\n                .url('/')\n                .getText('.breadcrumbs')\n                .then(function (text) {\n                return assert.ok(text === 'HISTORY', 'the .breadcrumbs returns not correct text');\n            });\n        }","status":"success","attempt":0},{"suiteUrl":"http://localhost:3000/","name":"chrome","metaInfo":{"url":"/","file":"hermione/breadcrumbs.hermione.js","sessionId":"bf8661f5b4bd73fe39675852a2136665"},"imagesInfo":[],"screenshot":false,"multipleTabs":true,"code":"function () {\n            return this.browser\n                .url('/')\n                .getText('.breadcrumbs')\n                .then(function (text) {\n                return assert.ok(text === 'HISTORY', 'the .breadcrumbs returns not correct text');\n            });\n        }","status":"success","attempt":1}]}],"status":"success"},{"name":"should return new path","suitePath":["Breadcrumbs","Breadcrumbs parse","should return new path"],"browsers":[{"name":"chrome","result":{"suiteUrl":"http://localhost:3000/","name":"chrome","metaInfo":{"url":"/","file":"hermione/breadcrumbs.hermione.js","sessionId":"bc476c300e546850d654a189a2a1ce5b"},"imagesInfo":[],"screenshot":false,"multipleTabs":true,"code":"function () {\n            return this.browser\n                .url('/')\n                .click('a')\n                .getUrl()\n                .then(function (url) {\n                return assert.ok(url === 'http://localhost:3000/files/ab90444b89769498eb6c455534f059926e470450/', 'url isn\\'t correct');\n            })\n                .getText('.breadcrumbs')\n                .then(function (text) {\n                return assert.ok(text === 'HISTORY / ROOT', 'the the .breadcrumbs returns not correct text');\n            });\n        }","status":"success","attempt":2},"retries":[{"suiteUrl":"http://localhost:3000/","name":"chrome","metaInfo":{"url":"/","file":"hermione/breadcrumbs.hermione.js","sessionId":"e5cec7231a14b8dc927ab207bada515c"},"imagesInfo":[],"screenshot":false,"multipleTabs":true,"code":"function () {\n            return this.browser\n                .url('/')\n                .click('a')\n                .getUrl()\n                .then(function (url) {\n                return assert.ok(url === 'http://localhost:3000/files/ab90444b89769498eb6c455534f059926e470450/', 'url isn\\'t correct');\n            })\n                .getText('.breadcrumbs')\n                .then(function (text) {\n                return assert.ok(text === 'HISTORY / ROOT', 'the the .breadcrumbs returns not correct text');\n            });\n        }","status":"success","attempt":0},{"suiteUrl":"http://localhost:3000/","name":"chrome","metaInfo":{"url":"/","file":"hermione/breadcrumbs.hermione.js","sessionId":"bf8661f5b4bd73fe39675852a2136665"},"imagesInfo":[],"screenshot":false,"multipleTabs":true,"code":"function () {\n            return this.browser\n                .url('/')\n                .click('a')\n                .getUrl()\n                .then(function (url) {\n                return assert.ok(url === 'http://localhost:3000/files/ab90444b89769498eb6c455534f059926e470450/', 'url isn\\'t correct');\n            })\n                .getText('.breadcrumbs')\n                .then(function (text) {\n                return assert.ok(text === 'HISTORY / ROOT', 'the the .breadcrumbs returns not correct text');\n            });\n        }","status":"success","attempt":1}]}],"status":"success"},{"name":"should return big path to file","suitePath":["Breadcrumbs","Breadcrumbs parse","should return big path to file"],"browsers":[{"name":"chrome","result":{"suiteUrl":"http://localhost:3000/content/ab90444b89769498eb6c455534f059926e470450/folder/folder_2/some_file_2.txt","name":"chrome","metaInfo":{"url":"/content/ab90444b89769498eb6c455534f059926e470450/folder/folder_2/some_file_2.txt","file":"hermione/breadcrumbs.hermione.js","sessionId":"bc476c300e546850d654a189a2a1ce5b"},"imagesInfo":[{"stateName":"breadcrumbs","refImagePath":"/Users/ilya777grin23/Documents/Projects/harry-reporter-boilerplate/newton-report/images/8f3e2a5/chrome/breadcrumbs.png","status":"fail","actualPath":"images/8f3e2a5/breadcrumbs/chrome~current_2.png","expectedPath":"images/8f3e2a5/breadcrumbs/chrome~ref_2.png","diffPath":"images/8f3e2a5/breadcrumbs/chrome~diff_2.png"}],"screenshot":false,"multipleTabs":true,"code":"function () {\n            return this.browser\n                .url(\"http://localhost:3000/content/\" + hash + \"/folder/folder_2/some_file_2.txt\")\n                .getText('.breadcrumbs')\n                .then(function (text) {\n                return assert.ok(text === 'HISTORY / ROOT / folder / folder_2 / some_file_2.txt', 'the .breadcrumbs retunrns not correct text');\n            })\n                .assertView('breadcrumbs', '.breadcrumbs');\n        }","status":"fail","attempt":2},"retries":[{"suiteUrl":"http://localhost:3000/content/ab90444b89769498eb6c455534f059926e470450/folder/folder_2/some_file_2.txt","name":"chrome","metaInfo":{"url":"/content/ab90444b89769498eb6c455534f059926e470450/folder/folder_2/some_file_2.txt","file":"hermione/breadcrumbs.hermione.js","sessionId":"e5cec7231a14b8dc927ab207bada515c"},"imagesInfo":[{"stateName":"breadcrumbs","refImagePath":"/Users/ilya777grin23/Documents/Projects/harry-reporter-boilerplate/newton-report/images/8f3e2a5/chrome/breadcrumbs.png","status":"success","expectedPath":"images/8f3e2a5/breadcrumbs/chrome~ref_0.png"}],"screenshot":false,"multipleTabs":true,"code":"function () {\n            return this.browser\n                .url(\"http://localhost:3000/content/\" + hash + \"/folder/folder_2/some_file_2.txt\")\n                .getText('.breadcrumbs')\n                .then(function (text) {\n                return assert.ok(text === 'HISTORY / ROOT / folder / folder_2 / some_file_2.txt', 'the .breadcrumbs retunrns not correct text');\n            })\n                .assertView('breadcrumbs', '.breadcrumbs');\n        }","status":"success","attempt":0},{"suiteUrl":"/content/ab90444b89769498eb6c455534f059926e470450/folder/folder_2/some_file_2.txt","name":"chrome","metaInfo":{"url":"/content/ab90444b89769498eb6c455534f059926e470450/folder/folder_2/some_file_2.txt","file":"hermione/breadcrumbs.hermione.js","sessionId":"bf8661f5b4bd73fe39675852a2136665"},"imagesInfo":[{"status":"updated","actualPath":"images/8f3e2a5/breadcrumbs/chrome~current_1.png","stateName":"breadcrumbs","imagePath":"/Users/ilya777grin23/Documents/Projects/harry-reporter-boilerplate/newton-report/images/8f3e2a5/chrome/breadcrumbs.png","expectedPath":"images/8f3e2a5/breadcrumbs/chrome~ref_1.png"}],"screenshot":false,"multipleTabs":true,"code":"function () {\n            return this.browser\n                .url(\"http://localhost:3000/content/\" + hash + \"/folder/folder_2/some_file_2.txt\")\n                .getText('.breadcrumbs')\n                .then(function (text) {\n                return assert.ok(text === 'HISTORY / ROOT / folder / folder_2 / some_file_2.txt', 'the .breadcrumbs retunrns not correct text');\n            })\n                .assertView('breadcrumbs', '.breadcrumbs');\n        }","status":"success","attempt":1}]}],"status":"fail"}],"status":"fail"}],"status":"fail"},{"name":"Server responses","suitePath":["Server responses"],"children":[{"name":"Statuses","suitePath":["Server responses","Statuses"],"children":[{"name":"should return 404 status","suitePath":["Server responses","Statuses","should return 404 status"],"browsers":[{"name":"chrome","result":{"suiteUrl":"http://localhost:3000/not-existing-url-i-think-so","name":"chrome","metaInfo":{"url":"/not-existing-url-i-think-so","file":"hermione/page.hermione.js","sessionId":"bc476c300e546850d654a189a2a1ce5b"},"imagesInfo":[],"screenshot":false,"multipleTabs":true,"code":"function () {\n            return this.browser\n                .url('/not-existing-url-i-think-so')\n                .getValue('.error')\n                .then(function (status) {\n                return assert.ok(status === '404', 'response not returned 404 status');\n            });\n        }","status":"success","attempt":2},"retries":[{"suiteUrl":"http://localhost:3000/not-existing-url-i-think-so","name":"chrome","metaInfo":{"url":"/not-existing-url-i-think-so","file":"hermione/page.hermione.js","sessionId":"e5cec7231a14b8dc927ab207bada515c"},"imagesInfo":[],"screenshot":false,"multipleTabs":true,"code":"function () {\n            return this.browser\n                .url('/not-existing-url-i-think-so')\n                .getValue('.error')\n                .then(function (status) {\n                return assert.ok(status === '404', 'response not returned 404 status');\n            });\n        }","status":"success","attempt":0},{"suiteUrl":"http://localhost:3000/not-existing-url-i-think-so","name":"chrome","metaInfo":{"url":"/not-existing-url-i-think-so","file":"hermione/page.hermione.js","sessionId":"bf8661f5b4bd73fe39675852a2136665"},"imagesInfo":[],"screenshot":false,"multipleTabs":true,"code":"function () {\n            return this.browser\n                .url('/not-existing-url-i-think-so')\n                .getValue('.error')\n                .then(function (status) {\n                return assert.ok(status === '404', 'response not returned 404 status');\n            });\n        }","status":"success","attempt":1}]}],"status":"success"},{"name":"should return 400 status","suitePath":["Server responses","Statuses","should return 400 status"],"browsers":[{"name":"chrome","result":{"suiteUrl":"http://localhost:3000/content/ab90444b89769498eb6c455534f059926e470450/not-existing-url-i-think-so","name":"chrome","metaInfo":{"url":"/content/ab90444b89769498eb6c455534f059926e470450/not-existing-url-i-think-so","file":"hermione/page.hermione.js","sessionId":"bc476c300e546850d654a189a2a1ce5b"},"imagesInfo":[],"screenshot":false,"multipleTabs":true,"code":"function () {\n            return this.browser\n                .url(\"/content/\" + hash + \"/not-existing-url-i-think-so\")\n                .getValue('.error')\n                .then(function (status) {\n                return assert.ok(status === '400', 'response not returned 400 status');\n            });\n        }","status":"success","attempt":2},"retries":[{"suiteUrl":"http://localhost:3000/content/ab90444b89769498eb6c455534f059926e470450/not-existing-url-i-think-so","name":"chrome","metaInfo":{"url":"/content/ab90444b89769498eb6c455534f059926e470450/not-existing-url-i-think-so","file":"hermione/page.hermione.js","sessionId":"e5cec7231a14b8dc927ab207bada515c"},"imagesInfo":[],"screenshot":false,"multipleTabs":true,"code":"function () {\n            return this.browser\n                .url(\"/content/\" + hash + \"/not-existing-url-i-think-so\")\n                .getValue('.error')\n                .then(function (status) {\n                return assert.ok(status === '400', 'response not returned 400 status');\n            });\n        }","status":"success","attempt":0},{"suiteUrl":"http://localhost:3000/content/ab90444b89769498eb6c455534f059926e470450/not-existing-url-i-think-so","name":"chrome","metaInfo":{"url":"/content/ab90444b89769498eb6c455534f059926e470450/not-existing-url-i-think-so","file":"hermione/page.hermione.js","sessionId":"bf8661f5b4bd73fe39675852a2136665"},"imagesInfo":[],"screenshot":false,"multipleTabs":true,"code":"function () {\n            return this.browser\n                .url(\"/content/\" + hash + \"/not-existing-url-i-think-so\")\n                .getValue('.error')\n                .then(function (status) {\n                return assert.ok(status === '400', 'response not returned 400 status');\n            });\n        }","status":"success","attempt":1}]}],"status":"success"},{"name":"should return status 500","suitePath":["Server responses","Statuses","should return status 500"],"browsers":[{"name":"chrome","result":{"suiteUrl":"http://localhost:3000/content/not-existing-hash-i-think-so/any-file","name":"chrome","metaInfo":{"url":"/content/not-existing-hash-i-think-so/any-file","file":"hermione/page.hermione.js","sessionId":"bc476c300e546850d654a189a2a1ce5b"},"imagesInfo":[],"screenshot":false,"multipleTabs":true,"code":"function () {\n            return this.browser\n                .url('content/not-existing-hash-i-think-so/any-file')\n                .getValue('.error')\n                .then(function (status) {\n                return assert.ok(status === '500', 'response not returned 500 status');\n            });\n        }","status":"success","attempt":2},"retries":[{"suiteUrl":"http://localhost:3000/content/not-existing-hash-i-think-so/any-file","name":"chrome","metaInfo":{"url":"/content/not-existing-hash-i-think-so/any-file","file":"hermione/page.hermione.js","sessionId":"e5cec7231a14b8dc927ab207bada515c"},"imagesInfo":[],"screenshot":false,"multipleTabs":true,"code":"function () {\n            return this.browser\n                .url('content/not-existing-hash-i-think-so/any-file')\n                .getValue('.error')\n                .then(function (status) {\n                return assert.ok(status === '500', 'response not returned 500 status');\n            });\n        }","status":"success","attempt":0},{"suiteUrl":"http://localhost:3000/content/not-existing-hash-i-think-so/any-file","name":"chrome","metaInfo":{"url":"/content/not-existing-hash-i-think-so/any-file","file":"hermione/page.hermione.js","sessionId":"bf8661f5b4bd73fe39675852a2136665"},"imagesInfo":[],"screenshot":false,"multipleTabs":true,"code":"function () {\n            return this.browser\n                .url('content/not-existing-hash-i-think-so/any-file')\n                .getValue('.error')\n                .then(function (status) {\n                return assert.ok(status === '500', 'response not returned 500 status');\n            });\n        }","status":"success","attempt":1}]}],"status":"success"}],"status":"success"},{"name":"Page view","suitePath":["Server responses","Page view"],"children":[{"name":"should return main page","suitePath":["Server responses","Page view","should return main page"],"browsers":[{"name":"chrome","result":{"suiteUrl":"http://localhost:3000/","name":"chrome","metaInfo":{"url":"/","file":"hermione/page.hermione.js","sessionId":"bc476c300e546850d654a189a2a1ce5b"},"imagesInfo":[{"stateName":"content","refImagePath":"/Users/ilya777grin23/Documents/Projects/harry-reporter-boilerplate/newton-report/images/f68317f/chrome/content.png","status":"success","expectedPath":"images/f68317f/content/chrome~ref_2.png"}],"screenshot":false,"multipleTabs":true,"code":"function () {\n            return this.browser\n                .url('/')\n                .isExisting('.content')\n                .then(function (isExists) {\n                return assert.ok(isExists, 'response not returned main page');\n            })\n                .assertView('content', '.content');\n        }","status":"success","attempt":2},"retries":[{"suiteUrl":"/","name":"chrome","metaInfo":{"url":"/","file":"hermione/page.hermione.js","sessionId":"e5cec7231a14b8dc927ab207bada515c"},"imagesInfo":[{"status":"updated","actualPath":"images/f68317f/content/chrome~current_0.png","stateName":"content","imagePath":"/Users/ilya777grin23/Documents/Projects/harry-reporter-boilerplate/newton-report/images/f68317f/chrome/content.png","expectedPath":"images/f68317f/content/chrome~ref_0.png"}],"screenshot":false,"multipleTabs":true,"code":"function () {\n            return this.browser\n                .url('/')\n                .isExisting('.content')\n                .then(function (isExists) {\n                return assert.ok(isExists, 'response not returned main page');\n            })\n                .assertView('content', '.content');\n        }","status":"success","attempt":0},{"suiteUrl":"http://localhost:3000/","name":"chrome","metaInfo":{"url":"/","file":"hermione/page.hermione.js","sessionId":"bf8661f5b4bd73fe39675852a2136665"},"imagesInfo":[{"stateName":"content","refImagePath":"/Users/ilya777grin23/Documents/Projects/harry-reporter-boilerplate/newton-report/images/f68317f/chrome/content.png","status":"success","expectedPath":"images/f68317f/content/chrome~ref_1.png"}],"screenshot":false,"multipleTabs":true,"code":"function () {\n            return this.browser\n                .url('/')\n                .isExisting('.content')\n                .then(function (isExists) {\n                return assert.ok(isExists, 'response not returned main page');\n            })\n                .assertView('content', '.content');\n        }","status":"success","attempt":1}]}],"status":"success"},{"name":"should return content of file","suitePath":["Server responses","Page view","should return content of file"],"browsers":[{"name":"chrome","result":{"suiteUrl":"http://localhost:3000/content/ab90444b89769498eb6c455534f059926e470450/folder/folder_2/some_file_2.txt","name":"chrome","metaInfo":{"url":"/content/ab90444b89769498eb6c455534f059926e470450/folder/folder_2/some_file_2.txt","file":"hermione/page.hermione.js","sessionId":"bc476c300e546850d654a189a2a1ce5b"},"imagesInfo":[{"stateName":"content","refImagePath":"/Users/ilya777grin23/Documents/Projects/harry-reporter-boilerplate/newton-report/images/9b4a7a7/chrome/content.png","status":"success","expectedPath":"images/9b4a7a7/content/chrome~ref_2.png"}],"screenshot":false,"multipleTabs":true,"code":"function () {\n            return this.browser\n                .url(\"http://localhost:3000/content/\" + hash + \"/folder/folder_2/some_file_2.txt\")\n                .getText('.content')\n                .then(function (text) {\n                return assert.ok(text === 'Test 1', 'url not work');\n            })\n                .assertView('content', '.content');\n        }","status":"success","attempt":2},"retries":[{"suiteUrl":"/content/ab90444b89769498eb6c455534f059926e470450/folder/folder_2/some_file_2.txt","name":"chrome","metaInfo":{"url":"/content/ab90444b89769498eb6c455534f059926e470450/folder/folder_2/some_file_2.txt","file":"hermione/page.hermione.js","sessionId":"e5cec7231a14b8dc927ab207bada515c"},"imagesInfo":[{"status":"updated","actualPath":"images/9b4a7a7/content/chrome~current_0.png","stateName":"content","imagePath":"/Users/ilya777grin23/Documents/Projects/harry-reporter-boilerplate/newton-report/images/9b4a7a7/chrome/content.png","expectedPath":"images/9b4a7a7/content/chrome~ref_0.png"}],"screenshot":false,"multipleTabs":true,"code":"function () {\n            return this.browser\n                .url(\"http://localhost:3000/content/\" + hash + \"/folder/folder_2/some_file_2.txt\")\n                .getText('.content')\n                .then(function (text) {\n                return assert.ok(text === 'Test 1', 'url not work');\n            })\n                .assertView('content', '.content');\n        }","status":"success","attempt":0},{"suiteUrl":"http://localhost:3000/content/ab90444b89769498eb6c455534f059926e470450/folder/folder_2/some_file_2.txt","name":"chrome","metaInfo":{"url":"/content/ab90444b89769498eb6c455534f059926e470450/folder/folder_2/some_file_2.txt","file":"hermione/page.hermione.js","sessionId":"bf8661f5b4bd73fe39675852a2136665"},"imagesInfo":[{"stateName":"content","refImagePath":"/Users/ilya777grin23/Documents/Projects/harry-reporter-boilerplate/newton-report/images/9b4a7a7/chrome/content.png","status":"success","expectedPath":"images/9b4a7a7/content/chrome~ref_1.png"}],"screenshot":false,"multipleTabs":true,"code":"function () {\n            return this.browser\n                .url(\"http://localhost:3000/content/\" + hash + \"/folder/folder_2/some_file_2.txt\")\n                .getText('.content')\n                .then(function (text) {\n                return assert.ok(text === 'Test 1', 'url not work');\n            })\n                .assertView('content', '.content');\n        }","status":"success","attempt":1}]}],"status":"success"}],"status":"success"}],"status":"success"}],"config":{"defaultView":"all","baseHost":"","scaleImages":false,"lazyLoadOffset":800}};
try { module.exports = data; } catch(e) {}
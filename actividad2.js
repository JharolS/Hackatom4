promise.then(f1).catch(f2)
//VS
promise.then(f1.f2)

// This fragments of the code is not equal because the first code has a resolution process and an error process in case the function fails
// While the second code has two process of resolution
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)

  // تغيير الدومين إلى الدومين الأصلي
  url.hostname = 'liveakgr.alkassdigital.net'

  // تعديل المسار إذا احتجت
  url.pathname = url.pathname.replace('master.m3u8', 'master540.m3u8')

  const modifiedRequest = new Request(url.toString(), request)
  const response = await fetch(modifiedRequest)

  return response
}

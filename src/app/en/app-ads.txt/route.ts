const appAdsTxt = "google.com, pub-3549809015011483, DIRECT, f08c47fec0942fa0";

export function GET() {
  return new Response(appAdsTxt, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  });
}
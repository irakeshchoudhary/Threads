import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Adding /api/uploadthing to publicRoutes to make it accessible to both signed-in and signed-out users.
  publicRoutes: ['/', '/api/webhook/clerk', '/api/uploadthing'],

  // Adding /api/uploadthing to ignoredRoutes to prevent Clerk authentication from running at all on this route.
  ignoredRoutes: ["/api/webhook/clerk", "/api/uploadthing"],
});

export const config = {
  matcher: ["/((?!.\\..|_next).)", "/", "/(api|trpc)(.)"],
};
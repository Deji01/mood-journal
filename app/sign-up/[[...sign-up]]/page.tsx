import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <SignUp
      redirectUrl="/new-user"
      afterSignUpUrl="/new-user"
      signInUrl="/sign-in"
      routing="path"
      path="sign-up"
    />
  );
}

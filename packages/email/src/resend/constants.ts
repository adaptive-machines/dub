// Self-hosted deployments set EMAIL_FROM (e.g. "Acme Links <links@acme.com>")
// to send every variant from their own verified Resend domain.
const SELF_HOSTED_FROM = process.env.EMAIL_FROM;

export const VARIANT_TO_FROM_MAP = {
  primary: SELF_HOSTED_FROM || "Dub.co <system@dub.co>",
  notifications: SELF_HOSTED_FROM || "Dub.co <notifications@mail.dub.co>",
  marketing: SELF_HOSTED_FROM || "Steven from Dub.co <steven@ship.dub.co>",
};

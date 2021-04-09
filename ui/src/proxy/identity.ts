import * as zod from "zod";

export interface Avatar {
  background: {
    r: number;
    g: number;
    b: number;
  };
  emoji: string;
}

const avatarSchema: zod.ZodSchema<Avatar> = zod.object({
  background: zod.object({
    r: zod.number(),
    g: zod.number(),
    b: zod.number(),
  }),
  emoji: zod.string(),
});

export interface Identity {
  avatarFallback: Avatar;
  metadata: {
    handle: string;
    ethereum: {
      address: string;
      expiration: string;
    } | null;
  };
  peerId: string;
  shareableEntityIdentifier: string;
  urn: string;
}

export const identitySchema: zod.ZodSchema<Identity> = zod.object({
  avatarFallback: avatarSchema,
  metadata: zod.object({
    handle: zod.string(),
    ethereum: zod
      .object({
        address: zod.string(),
        expiration: zod.string(),
      })
      .nullable(),
  }),
  peerId: zod.string(),
  shareableEntityIdentifier: zod.string(),
  urn: zod.string(),
});
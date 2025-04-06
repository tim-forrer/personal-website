import { Stack, Text, Title } from "@mantine/core";
import Link from "next/link";

export default function Home() {
  return (
    <Stack>
      <Title>Hello</Title>
      <Text size='xl'>
        I <Link href="/projects">prod at the edges of quantum theory</Link> and see if what comes back can be used for building better quantum computers.<br />
        <br />
        In my spare time, I <Link href="./">build LLMs</Link>, and try to take nice photos.
      </Text>
    </Stack>
  );
}

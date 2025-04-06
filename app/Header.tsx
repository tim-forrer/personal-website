import { Container, Group, Image, Title, Text, Stack } from '@mantine/core';
import Link from 'next/link';
import classes from './Header.module.css';

const links = [
    { link: '/projects', label: 'Projects' },
    { link: '/gallery', label: 'Gallery' },
];

export function Header() {
    const items = links.map((link) => (
        <Link
            key={link.label}
            href={link.link}
            className={classes.link}
        >
            {link.label}
        </Link>
    ));

    return (
        <header className={classes.header}>
            <Container size="md" className={classes.inner}>
                <Link href='/' className={classes.headerlink}>
                    <Group>
                        <Image src="/icon.svg" h={45} w={45} />
                        <Stack gap={0}>
                            <Title order={2}>Tim Forrer</Title>
                            <Text size='sm'>Doctoral Student @ UTokyo</Text>
                        </Stack>
                    </Group>
                </Link>
                <Group gap={5}>
                    {items}
                </Group>
            </Container>
        </header>
    );
}
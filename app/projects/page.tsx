import { Title, Group, ThemeIcon } from "@mantine/core";
import { MdConstruction } from "react-icons/md";

export default function Page() {
    return (
        <Group justify="center">
            <ThemeIcon size='lg' variant='default'><MdConstruction /></ThemeIcon>
            <Title order={2}>Coming soon...</Title>
        </Group>
    );
}
import { Container, Grid, SimpleGrid, Skeleton } from '@mantine/core';

const PRIMARY_COL_HEIGHT = '500px';

export function Layout() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

  return (
    <Container my="lg" size='xl' style={{ maxWidth: '1400px' }}>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
        <Skeleton height={PRIMARY_COL_HEIGHT} radius="lg" animate={false} />
        <Grid gutter="lg">
          <Grid.Col>
            
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="lg" animate={false} />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="lg" animate={false} />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="lg" animate={false} />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}
import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import { ActionIcon, Container, Group } from '@mantine/core';
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from '../css/FooterSocial.module.css';

export function FooterSocial() {
  return (
    <div className={classes.footer}>
      <Container size="xl" className={classes.inner}>
        {/* <MantineLogo size={28} /> */}
        <Group gap={0} className={classes.links} w={"100%"} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
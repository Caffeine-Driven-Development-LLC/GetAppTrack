import Image from 'next/image';
import { Box, Button, Divider, Link, Stack } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Header() {
  const router = useRouter();
  const [downloadUrl, setDownloadUrl] = useState<string>('');

  useEffect(() => {
    const getOS = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      if (userAgent.includes('mac')) return 'Mac';
      if (userAgent.includes('win')) return 'Windows';
      if (userAgent.includes('linux')) return 'Linux';
      return 'Unknown OS';
    };

    const fetchLatestDmgUrl = async (osType: string) => {
      try {
        const response = await fetch(
          'https://api.github.com/repos/Caffeine-Driven-Development-LLC/AppTrack/releases/latest'
        );
        const data = await response.json();
        if (osType === 'Mac') {
          const dmgAsset = data.assets.find((asset: { name: string }) =>
            asset.name.endsWith('.dmg')
          );
          if (dmgAsset) {
            setDownloadUrl(dmgAsset.browser_download_url);
          }
        } else if (osType === 'Windows') {
          const exeAsset = data.assets.find((asset: { name: string }) =>
            asset.name.endsWith('.exe')
          );
          if (exeAsset) {
            setDownloadUrl(exeAsset.browser_download_url);
          }
        }
      } catch (error) {
        console.error('Error fetching release:', error);
      }
    };

    const user_operating_system = getOS();
    fetchLatestDmgUrl(user_operating_system);
  }, []);

  const downloadButton = () => {
    return (
      <Button
        variant="contained"
        color="success"
        size="large"
        href={downloadUrl}
      >
        Download
      </Button>
    );
  };

  return (
    <Box
      component="header"
      sx={{
        padding: 3,
        bgcolor: 'primary.light',
      }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        spacing={3}
      >
        <Link component="button" onClick={() => router.push('/')}>
          <Image
            src="/Full Logo.svg"
            alt="App Track logo"
            width={400}
            height={100}
            style={{ maxWidth: 400, paddingLeft: 10, paddingRight: 10 }}
          />
        </Link>
        <Stack
          direction={{ xs: 'column', sm: 'row-reverse' }}
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          {downloadButton()}
          <Link
            component="button"
            variant="h5"
            onClick={() => router.push('/documentation/getting-started')}
          >
            Documentation
          </Link>
          <Link
            component="button"
            variant="h5"
            onClick={() => router.push('/faq')}
          >
            FAQ
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
}

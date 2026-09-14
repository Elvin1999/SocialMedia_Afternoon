import {
    AppBar,
    Avatar,
    Badge,
    Box,
    Container,
    IconButton,
    InputBase,
    Paper,
    Skeleton,
    Stack,
    Toolbar,
    Typography,
  } from '@mui/material';

  import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
  import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
  import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
  import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

  import { useQuery } from '@tanstack/react-query';

  import { useAuthStore } from '../features/auth/store/authStore';

  export default function FeedPage() {
    const user = useAuthStore((state) => state.user);

    

    return (
      <Box
        sx={{
          minHeight: '100vh',
          bgcolor: '#f6f8fc',
        }}
      >
        <AppBar
          position="sticky"
          elevation={0}
          sx={{
            bgcolor: 'rgba(255,255,255,0.9)',
            color: 'text.primary',
            backdropFilter: 'blur(18px)',
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Toolbar
            sx={{
              minHeight: '72px !important',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: 42,
                height: 42,
                borderRadius: 3,
                display: 'grid',
                placeItems: 'center',
                bgcolor: 'primary.main',
                color: 'white',
                fontWeight: 900,
                fontSize: 21,
                boxShadow:
                  '0 8px 22px rgba(24,119,242,.28)',
              }}
            >
              S
            </Box>

            <Paper
              elevation={0}
              sx={{
                display: {
                  xs: 'none',
                  sm: 'flex',
                },
                alignItems: 'center',
                px: 1.5,
                height: 44,
                width: 320,
                borderRadius: 999,
                bgcolor: '#f1f5f9',
              }}
            >
              <SearchRoundedIcon
                sx={{
                  color: 'text.secondary',
                  mr: 1,
                }}
              />

              <InputBase
                fullWidth
                placeholder="Search SMM"
              />
            </Paper>

            <Box sx={{ flexGrow: 1 }} />

            <IconButton>
              <HomeRoundedIcon />
            </IconButton>

            <IconButton>
              <Badge
                color="error"
                badgeContent={3}
              >
                <ChatBubbleOutlineRoundedIcon />
              </Badge>
            </IconButton>

            <IconButton>
              <Badge
                color="error"
                badgeContent={5}
              >
                <NotificationsNoneRoundedIcon />
              </Badge>
            </IconButton>

            <Avatar
              sx={{
                ml: 0.5,
                width: 38,
                height: 38,
                fontWeight: 700,
              }}
            >
              {user?.firstName?.[0]}
            </Avatar>
          </Toolbar>
        </AppBar>

        <Container
          maxWidth="xl"
          sx={{
            py: 4,
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: '240px minmax(0, 680px)',
                lg: '240px minmax(0, 680px) 300px',
              },
              gap: 3,
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                display: {
                  xs: 'none',
                  md: 'block',
                },
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  borderRadius: 4,
                  position: 'sticky',
                  top: 96,
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Stack spacing={1.2}>
                  <Typography
                    variant="overline"
                    color="text.secondary"
                    fontWeight={700}
                  >
                    Navigation
                  </Typography>

                  <Typography fontWeight={700}>
                    Home
                  </Typography>

                  <Typography color="text.secondary">
                    Friends
                  </Typography>

                  <Typography color="text.secondary">
                    Messages
                  </Typography>

                  <Typography color="text.secondary">
                    Notifications
                  </Typography>
                </Stack>
              </Paper>
            </Box>

            <Stack spacing={2.5}>
            

             

            
              
            </Stack>

            <Box
              sx={{
                display: {
                  xs: 'none',
                  lg: 'block',
                },
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 2.5,
                  borderRadius: 4,
                  position: 'sticky',
                  top: 96,
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Typography
                  fontWeight={800}
                  mb={2}
                >
                  Contacts
                </Typography>

                <Typography
                  color="text.secondary"
                  variant="body2"
                >
                  Online friends will appear here.
                </Typography>
              </Paper>
            </Box>
          </Box>
        </Container>
      </Box>
    );
  }
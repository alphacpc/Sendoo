import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Divider,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";

import {
  UserIcon,
  SettingsIcon,
  SettingsOutlined,
  PostAddOutlined,
  WrapTextOutlined,
  UpdateOutlined,
  AccountBoxRounded,
  AccountBoxOutlined,
  EditOutlined,
  LockOutlined,
  HomeOutlined,
  ArchiveOutlined,
  FolderOutlined,
} from "@material-ui/icons";

import ProfileImg from "./../assets/images/thomas.jpg";
import { BackgroundColor } from "chalk";

const user = {
  avatar: ProfileImg,
  jobTitle: "Junior Developer",
  name: "Jules Burcez",
};

const items = [
  {
    href: "/account",
    icon: AccountBoxOutlined,
    title: "Compte",
  },
  {
    href: "/setting",
    icon: SettingsOutlined,
    title: "Modifier",
  },
  {
    href: "/write",
    icon: PostAddOutlined,
    title: "Ecrire un article",
  },
  {
    href: "/posts",
    icon: FolderOutlined,
    title: "Mes articles",
  },
  {
    href: "/password",
    icon: LockOutlined,
    title: "Changer de mot de passe",
  },
  {
    href: "/",
    icon: HomeOutlined,
    title: "Page d'accueil",
  },
];

const NavItem = ({ href, icon: Icon, title, ...rest }) => {
  return (
    <ListItem
      disableGutters
      sx={{
        display: "flex",
        py: 0,
      }}
      {...rest}
    >
      <Button
        component={RouterLink}
        sx={{
          color: "text.secondary",
          fontWeight: "medium",
          justifyContent: "flex-start",
          letterSpacing: 1,
          py: 1.25,
          textTransform: "none",
          width: "100%",

          "& svg": {
            mr: 1,
          },
        }}
        to={href}
        style={{
          color: "#6b778c",
          fontWeight: "500",
          fontSize: "16px",
          fontFamily: "Roboto,Helvetica,Arial,sans-serif",
        }}
      >
        {Icon && <Icon size="20" />}
        <span>{title}</span>
      </Button>
    </ListItem>
  );
};

const DashboardSlideBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        borderRight: "1px solid #ccc",
        backgroundColor: "#FFE5E2",
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          p: 2,
        }}
      >
        <Avatar
          component={RouterLink}
          src={user.avatar}
          sx={{
            cursor: "pointer",
          }}
          to="/account"
        />
        <Typography color="textPrimary" variant="body1">
          {user.name}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <List>
          {items.map((item) => (
            <NavItem
              style={{ height: "5vh" }}
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box sx={{ flexGrow: 1 }} />

      <Box
        sx={{
          backgroundColor: "background.default",
          m: 2,
          p: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: 2,
          }}
        >
          <Button
            color="secondary"
            component="a"
            href="/login"
            variant="contained"
          >
            Deconnexion
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardSlideBar;

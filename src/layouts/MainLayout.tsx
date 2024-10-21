import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import {
	AppBar,
	Badge,
	BottomNavigation,
	BottomNavigationAction,
	Button,
	Card,
	CardActions,
	CardContent,
	Toolbar,
	Typography,
} from "@mui/material";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import WalletOutlinedIcon from "@mui/icons-material/WalletOutlined";
import FollowTheSignsOutlinedIcon from "@mui/icons-material/FollowTheSignsOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

export default function TemporaryDrawer() {
	const [open, setOpen] = React.useState(false);

	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen);
	};

	const DrawerList = (
		<Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
			<List>
				<ListItem disablePadding>
					<ListItemButton>
						<ListItemIcon>
							<AccountCircleOutlinedIcon color="primary" />
						</ListItemIcon>
						<ListItemText primary="Account" />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton>
						<ListItemIcon>
							<AssignmentOutlinedIcon color="primary" />
						</ListItemIcon>
						<ListItemText primary="Orders" />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton>
						<ListItemIcon>
							<WalletOutlinedIcon color="primary" />
						</ListItemIcon>
						<ListItemText primary="Wallets" />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton>
						<ListItemIcon>
							<FollowTheSignsOutlinedIcon color="primary" />
						</ListItemIcon>
						<ListItemText primary="Transactions" />
					</ListItemButton>
				</ListItem>
			</List>
		</Box>
	);

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar color="primary">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="open drawer"
						sx={{ mr: 2 }}
						onClick={toggleDrawer(true)}
					>
						<MenuOutlinedIcon />
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Lalamove
					</Typography>
					<IconButton size="large" aria-label="show 17 new notifications" color="inherit">
						<Badge badgeContent={3} color="error">
							<NotificationsOutlinedIcon />
						</Badge>
					</IconButton>
				</Toolbar>
			</AppBar>

			<Drawer open={open} onClose={toggleDrawer(false)}>
				{DrawerList}
			</Drawer>
			<Box component="main" sx={{ flexGrow: 1, p: 3, mt: 6 }}>
				<Card sx={{ minWidth: 275, elevation: 0 }}>
					<CardContent></CardContent>
				</Card>
			</Box>
		</Box>
	);
}

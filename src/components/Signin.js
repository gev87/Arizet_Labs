import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { NetTref } from "./SvgImages";
import styled from "@emotion/styled";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const rectangleStyle = {

	width: "500px",
	height: "400px",
	background: "#FEF6F0",
	boxShadow: "0px 0px 30px rgba(91, 105, 152, 0.2)",
	borderRadius: "16px",
	mt: 17,
	mb: 27,
	ml: 15,
};


const headerStyle = {
	position: "absolute",
	width: "506px",
	height: "41px",
	fontFamily: "Manrope",
	fontStyle: "normal",
	fontWeight: 800,
	fontSize: "20px",
	lineHeight: "41px",
	textAlign: "center",
	textTransform: "uppercase",
	color: "#3E352F",
};

export default function SignIn() {
	const [hasError, setHasError] = useState(false);
	const header = "get lovely cuties in your area";
	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const credentials = {
			username: data.get("username"),
			password: data.get("password"),
			site_key: "no01",
		};
		const url = "https://iconnect247.net/api/v2/sessions";
		try {
			const response = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(credentials),
			});

			if (!response.ok) {
				throw new Error(`An error occurred: ${response.statusText}`);
			}
			const result = await response.json();
			setHasError(false);
			navigate("/home", { state: { ...result, username: credentials.username } });
			console.log("result", result);
		} catch (error) {
			setHasError(true);
		}
	};

	const CustomTextField = styled(TextField)({
		"& .MuiOutlinedInput-root,& .MuiInputBase-root": {
			"& fieldset": {
				borderColor: "#F6A95F",
				borderWidth: 2,
				borderRadius: 12,
				margin: "20px 0px 0px 0px",
				width: "300px",
			},
			"&:hover fieldset": {
				borderColor: "#F6A95F",
			},
			"&.Mui-focused fieldset": {
				borderColor: "#F6A95F",
			},
			"&.Mui-error fieldset": {
				borderColor: "red",
			},
			"& .MuiInputLabel-root": {
				color: "#F6A95F",
			},
			"& .MuiInputLabel-root.Mui-focused": {
				display: "none",
			},
		},
	});

	return (
		<Box
			sx={{
				display: "flex",
				background: "linear-gradient(180deg, rgba(239, 226, 214, 0.2) 0%, #EFE2D6 100%)",
				height: "100vh",
				overflow: "hidden",
			}}
		>
			<Box sx={rectangleStyle} component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						mt: 8,
						display: "flex",
						flexDirection: "column",
					}}
				>
					<Typography sx={headerStyle}>{header}</Typography>
					<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 5 }}>
						<Box
							sx={{
								display: "flex",
								align: "center",
							}}
						>
							<Typography noWrap paragraph align="right" sx={{ mt: 5, ml: 6, mr: 1 }}>
								{"My username:"}
							</Typography>
							<CustomTextField
								error={hasError}
								helperText={hasError ? "your username or password is wrong" : ""}
								id="username"
								name="username"
								margin="normal"
								variant="outlined"
								placeholder="username"
							/>
						</Box>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								ml: 2,
							}}
						>
							<Typography sx={{ mt: 5, mr: 1, ml: 4.5 }} noWrap paragraph align="right">
								My password:
							</Typography>
							<CustomTextField
								error={hasError}
								helperText={hasError ? "your username or password is wrong" : ""}
								name="password"
								id="password"
								margin="normal"
								variant="outlined"
								placeholder="password"
							/>
						</Box>
						<Box align="right">
							<Button
								type="submit"
								variant="contained"
								sx={{ mt: 3, mb: 2, background: "#F6A95F" }}
							>
								START!
							</Button>
						</Box>
					</Box>
					<Box item align="center" sx={{ color: "black" }}>
						Don't have an account?
						<Link href="/signup" variant="body2">
							{" Sign Up"}
						</Link>
					</Box>
				</Box>
				<Footer />
			</Box>
			<Box sx={{ ml: 5 }}>
				<Box sx={{ ml: 60, width: "500px" }}>
					<NetTref />
				</Box>
				<Box sx={{ margin: "50px 200px 10px" }}>
					<img width="70%" src="/Pic1.png" alt="rightPhoto" />
				</Box>
			</Box>
		</Box>
	);
}

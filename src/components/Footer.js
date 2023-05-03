import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Footer(props) {
	const mainUrl = "https://www.nett-treff.com";
	const links = [
		{
			href: "/c3RhdGljUGFnZS9wcml2YWN5cG9saWN5bmV0dC10cmVmZi5jb20=",
			text: "Privacy Policy",
		},
		{
			href: "/c3RhdGljUGFnZS90ZXJtc25ldHQtdHJlZmYuY29t",
			text: "Terms of Use",
		},
		{
			href: "/c3RhdGljUGFnZS90ZXJtcz9odG1sPXNhZmVkYXRpbmduZXR0LXRyZWZmLmNvbQ==",
			text: "Safe Dating",
		},
		{
			href: "/support/contactUs",
			text: "Contact Us",
		},
	];

	return (
		<Box sx={{ mt: 25, ml: 5 }}>
			<Box display="flex" gap="25px">
				{links.map((link, index) => (
					<React.Fragment key={index + link.text}>
						<Link color="inherit" href={mainUrl + link.href}>
							{link.text}
						</Link>
					</React.Fragment>
				))}
			</Box>
			<Typography variant="body2" color="text.secondary" align="center" {...props}>
				{`© Copyright ${new Date().getFullYear()},Kaleton Web s.r.o.`}
			</Typography>
		</Box>
	);
}

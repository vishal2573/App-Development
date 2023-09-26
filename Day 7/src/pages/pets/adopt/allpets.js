import * as React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "../../../components/footer";
import NavBar from "../../../components/navbar";

const petData = [
  {
    name: "Bruno",
    description:
      "Bruno is a loyal and affectionate canine companion with a heart as big as his gentle, brown eyes.",
    breed: "Golden Retriever",
    gender: "Male",
    age: 2,
    price: 14000,
    image:
      "https://images.unsplash.com/photo-1588022274642-f238f77ec193?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    url: "/pet1", // Add the URL for Bruno
  },
  {
    name: "Luna",
    description:
      "Luna, our one-year-old feline enchantress, is a bundle of energy and curiosity with sleek ebony fur and striking moonlit eyes.",
    breed: "Birman",
    gender: "Female",
    age: 1,
    price: 4000,
    image:
      "https://images.unsplash.com/photo-1567355187824-332fc4c3dcb4?ixlib=rb-4.0.3&ixid=M3xMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
    url: "/pet2", // Add the URL for Luna
  },
  // Add more pet objects here with unique names, descriptions, breeds, genders, prices, and URLs
];

const defaultTheme = createTheme();

export default function AllPets() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <NavBar />
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Adopt A Pet!
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              "Explore our heartwarming collection of adoptable pets, carefully
              curated with love. Find your new best friend, and give a forever
              home to a furry companion in need."
            </Typography>
          </Container>
        </Box>
        <Container sx={{ pb: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {petData.map((pet, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Link to={pet.url}>
                  {/* Wrap the Card with Link */}
                  <Card
                    className="hover:cursor-pointer hover:transform hover:scale-105 transition-transform"
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        // 16:9
                        pt: "56.25%",
                      }}
                      image={pet.image}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {pet.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Breed: {pet.breed}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Gender: {pet.gender}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Age: {pet.age} Year(s)
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        className="pb-2"
                      >
                        Price: Rs.{pet.price}
                      </Typography>
                      <Typography>{pet.description}</Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Footer />
    </ThemeProvider>
  );
}

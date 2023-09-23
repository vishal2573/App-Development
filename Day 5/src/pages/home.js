import { Button } from "@mui/material";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import useRememberMe from "../service/rememberMe";


export default function HomePage() {
  useRememberMe();

  return (
    <div className="flex flex-col h-screen justify-between">
      <NavBar />
      <div className="mb-auto">
        <div className="flex">
          <div className="flex flex-col justify-center mt-[1%] mx-5 md:mx-12 lg:w-1/2">
            
            <div className="flex my-5">
              <div className="mr-5">
                <Button variant="contained" href="/signup">
                  Sign Up
                </Button>
              </div>
              <div>
                <Button className="ml-2" variant="outlined" href="/login">
                  Login
                </Button>
              </div>
            </div>
            </div>
          
        </div>
      </div>
      <Footer />
    </div>
  );
}

import * as React from "react";
import { Button } from "antd";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddPetDog1 from "../../../assets/AddPet/AddPetDog.jpg";
import NavBar from "../../../components/navbar";
import Footer from "../../../components/footer";
import { RightOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";
import { Link } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import {
  setPetName,
  setPetType,
  setPetBreed,
  setPetGender,
  setPetDescription,
} from "../../../redux/formSlice";
import { selectFormData } from "../../../redux/formSlice";

const { TextArea } = Input;

const defaultTheme = createTheme();

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export default function AddPetInfo() {
  const [previewOpen, setPreviewOpen] = React.useState(false);
  const [previewImage, setPreviewImage] = React.useState("");
  const [previewTitle, setPreviewTitle] = React.useState("");
  const [fileList, setFileList] = React.useState([]);
  const [gender, setGender] = React.useState("");

  const dispatch = useDispatch();
  const formData = useSelector(selectFormData);

  const handlePetNameChange = (event) => {
    dispatch(setPetName(event.target.value));
  };

  const handlePetTypeChange = (event) => {
    dispatch(setPetType(event.target.value));
  };

  const handlePetBreedChange = (event) => {
    dispatch(setPetBreed(event.target.value));
  };

  const handlePetGenderChange = (event) => {
    dispatch(setPetGender(event.target.value));
  };

  const handlePetDescriptionChange = (event) => {
    dispatch(setPetDescription(event.target.value));
  };

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const handleChange = ({ fileList: newFileList }) => {
    if (newFileList.length > 4) {
      newFileList.pop();
    }
    setFileList(newFileList);
  };
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <div class="flex flex-col h-screen justify-between">
      <NavBar />
      <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={5}
            sx={{
              backgroundImage: `url(${AddPetDog1})`,
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "100%",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={7}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                Enter Your Pet's Details
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  onChange={handlePetNameChange}
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="type"
                  label="Type"
                  name="type"
                  onChange={handlePetTypeChange}
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="breed"
                  label="Breed"
                  name="breed"
                  onChange={handlePetBreedChange}
                  autoFocus
                />
                <FormControl fullWidth sx={{ mt: 2 }}>
                  <InputLabel id="gender-label">Gender</InputLabel>
                  <Select
                    labelId="gender-label"
                    id="gender"
                    value={gender}
                    label="Gender"
                    onChange={(e) => {
                      setGender(e.target.value);
                      handlePetGenderChange(e);
                    }}
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                  </Select>
                </FormControl>
                <div className="pt-2 pb-4">
                  <TextArea
                    rows={4}
                    placeholder="Enter a brief description of your pet"
                    maxLength={100}
                    onChange={handlePetDescriptionChange}
                    required
                  />
                </div>
                <div className="pb-2">
                  Upload Images of your Pet (Upto 4 images)
                </div>
                <Upload
                  //action=""
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={handlePreview}
                  onChange={handleChange}
                  multiple={true}
                >
                  {fileList.length >= 8 ? null : uploadButton}
                </Upload>

                <Modal
                  open={previewOpen}
                  title={previewTitle}
                  footer={null}
                  onCancel={handleCancel}
                >
                  <img
                    alt="example"
                    style={{
                      width: "100%",
                    }}
                    src={previewImage}
                  />
                </Modal>
                <div className="text-center pt-3">
                  <Link to={"/newpetmedi"}>
                    <Button
                      type="primary"
                      shape="circle"
                      icon={<RightOutlined style={{ color: "white" }} />}
                      style={{
                        backgroundColor: "#1890ff",
                        borderColor: "#1890ff",
                      }}
                      ghost
                      size="large"
                    />
                  </Link>
                </div>
              </Box>
            </Box>
          </Grid>
          <Footer />
        </Grid>
      </ThemeProvider>
    </div>
  );
}

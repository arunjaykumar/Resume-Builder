import "./Styles/Home.css";
import { Box, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { Navbar, ScreenDarkComponent } from "./";
import { templates } from "../Utils/Data/templates";
import { selectTemplate } from "../Redux/Actions/actions";

const StatetoProps = (state) => ({
  selectedTemplateId: state.selectedTemplateReducer.selectedTemplateId,
});

const DispatchtoProps = (dispatch) => ({
  setSelectedTemplateId: (id) => dispatch(selectTemplate(id)),
});

const Home = (props) => {
  const navigate = useNavigate();

  const navigateToFillDetails = (id) => {
    props.setSelectedTemplateId(id);
    navigate("/template/fill-details");
  };
  //setting the navbar active link to identify on which page user is at.

  return (
    <>
      <Navbar active={"Resume Templates"} />
      <>
        <div className="home">
          <div className="home-templates-cont">
            <h2 className="template-header-title">Templates</h2>
            <p className="template-select-teaxt">
              Select a template to get started
            </p>

            <Stack
              sx={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: {
                  sm: "1fr 1fr",
                  md: "1fr 1fr",
                  lg: "1fr 1fr 1fr",
                  xl: "2fr 2fr 2fr 2fr",
                },
                gridGap: "1px",
              }}
            >
              {templates.map((template) => {
                return (
                  <Box
                    key={template.id}
                    id="template"
                    className="templates-img-cont"
                  >
                    <img
                      style={{
                        width: "90%",
                        height: "100%",
                      }}
                      className="template-img"
                      src={template.template_img}
                      alt={template.template_name}
                    />
                    <ScreenDarkComponent />
                    <Button
                      className="use-template-btn"
                      onClick={() => navigateToFillDetails(template.id)}
                      size="large"
                      variant="contained"
                      color="primary"
                    >
                      Use me
                    </Button>
                  </Box>
                );
              })}
            </Stack>
          </div>
        </div>
      </>
    </>
  );
};

export default connect(StatetoProps, DispatchtoProps)(Home);

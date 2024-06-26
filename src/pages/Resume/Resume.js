import React from "react";
import { Grid, Typography, Icon, Paper } from "@material-ui/core";
//import { TextField } from "@material-ui/core";
import CustomTimeline, {
  CustomTimelineSeperator,
} from "../../components/CustomTimeline/CustomTimeline";
import { Work, School } from "@material-ui/icons/";
import resumeData from "../../utils/resumeData";
import resumeDataFR from "../../utils/resumeData FR";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import "./Resume.css";
import TimelineDot from "@material-ui/lab/TimelineDot";
//import CustomButton from "../../components/CustomButton/CustomButton";

function Resume({ language }) {
  const resumeDataTranslated = language === "en" ? resumeData : resumeDataFR;
  return (
    <>
      {/* About me */}
      <Grid container className={"section pb_45 pt_45"}>
        <Grid item className={"section_title mb_30"}>
          <span></span>
          <h6 className={"section_title_text"}>{language === "en" ? "About Me" : "À Propos De Moi"}</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant={"body2"} className={"about_me_text"}>
            {resumeDataTranslated.about_me}
          </Typography>
        </Grid>
      </Grid>

      {/* Education and Experiences */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">Resume</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container className="resume_timeline">
            {/* Experience */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title={language == "en" ? "Work Experience" : "Expérience"} icon={<Work />}>
                {resumeDataTranslated.experiences.map((experience) => (
                  <TimelineItem>
                    <CustomTimelineSeperator />
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {experience.title}
                      </Typography>
                      <Typography variant={"caption"} className="timeline_date">
                        {experience.date}
                      </Typography>
                      <Typography
                        variant={"body2"}
                        className="timeline_description"
                      >
                        {experience.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>

            {/* Education */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title={"Education"} icon={<School />}>
                {resumeDataTranslated.educations.map((education) => (
                  <TimelineItem>
                    <CustomTimelineSeperator />
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {education.title}
                      </Typography>
                      <Typography variant={"caption"} className="timeline_date">
                        {education.date}
                      </Typography>
                      <Typography
                        variant={"body2"}
                        className="timeline_description"
                      >
                        {education.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Services */}
      <Grid container className={"section pb_45"}>
        <Grid item className={"section_title mb_30"}>
          <span></span>
          <h6 className={"section_title_text"}>{language === "en" ? "My Services" : "Mes Services"}</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1} justify={"space-around"}>
            {resumeDataTranslated.services.map((service) => (
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={5} className={"skill"}>
                  <div className="service">
                    <Icon className="service_icon">{service.icon}</Icon>
                    <Typography varian={"h6"} className={"service_title"}>
                      {service.title}
                    </Typography>
                    <Typography
                      variant={"body2"}
                      className={"service_description"}
                    >
                      {service.description}
                    </Typography>
                  </div>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Skills */}
      <Grid className={"section graybg pb_45 p_50 pt_45"}>
        <Grid item xs={12}>
          <Grid item className={"section_title mb_30"}>
            <span></span>
            <h6 className={"section_title_text"}>{language === "en" ? "My Skills" : "Mes Compténces"}</h6>
          </Grid>
          <Grid container spacing={3} justify={"space-between"}>
            {resumeDataTranslated.skills.map((skill) => (
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={0} className={"skill"}>
                  <Typography varian={"h6"} className={"skill_title"}>
                    {skill.title}
                  </Typography>
                  {skill.description.map((element) => (
                    <Typography
                      variant={"body2"}
                      className={"skill_description"}
                    >
                      <TimelineDot
                        variant={"outlined"}
                        className={"timeline_dot"}
                      />
                      {element}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      <Grid className={"section graybg pb_45 p_50 pt_45"}>
        <Grid item xs={12}>
          <Grid item className={"section_title mb_30"}>
            <span></span>
            <h6 className={"section_title_text"}>{language === "en" ? "Languages" : "Langues"}</h6>
          </Grid>
          <Grid container spacing={3} justify={"space-between"}>
            {resumeDataTranslated.languages.map((skill) => (
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={0} className={"skill"}>
                  <Typography varian={"h6"} className={"skill_title"}>
                    {skill.title}
                  </Typography>
                  {skill.description.map((element) => (
                    <Typography
                      variant={"body2"}
                      className={"skill_description"}
                    >
                      <TimelineDot
                        variant={"outlined"}
                        className={"timeline_dot"}
                      />
                      {element}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      <Grid container className={"section pb_45"}>
        <Grid item className={"section_title mb_30"}>
          <span></span>
          <h6 className={"section_title_text"}>{language === "en" ? "My Interests" : "Mes Interets"}</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1} justify={"space-around"}>
            {resumeDataTranslated.interests.map((interests) => (
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={5} className={"interests"}>
                  <div className="interests">
                    <Icon className="interests_icon">{interests.icon}</Icon>
                    <Typography varian={"h6"} className={"interests_title"}>
                      {interests.title}
                    </Typography>
                  </div>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>


    </>
  );
}

export default Resume;

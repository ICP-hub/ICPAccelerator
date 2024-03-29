export const mentorRegistrationPersonalDetails = [
  {
    id: "full_name",
    type: "text",
    name: "full_name",
    required: true,
    label: "Full name*",
    onFocus: null,
    onBlur: null,
  },
  {
    id: "email",
    type: "email",
    name: "email",
    label: "Email address",
  },
  {
    id: "telegram_id",
    type: "text",
    name: "telegram_id",
    label: "Telegram ID.",
  },
  {
    id: "twitter_id",
    type: "text",
    name: "twitter_id",
    label: "Twitter ID.",
  },
  {
    id: "openchat_username",
    type: "text",
    name: "openchat_username",
    label: "Openchat Username",
  },
  {
    id: "bio",
    type: "text",
    name: "bio",
    label: "Bio.",
  },
  
];


  export const mentorRegistrationDetails = [
    {
      id: "reason_for_joining",
      type: "text",
      name: "reason_for_joining",
      required: true,
      label: "Reason for joining *",
    },
    {
      id: "website",
      type: "text",
      name: "website",
      required: true,
      label: "Website link *",
    },
    {
      id: "years_of_mentoring",
      type: "number",
      name: "years_of_mentoring",
      required: true,
      label: "Years of mentoring *",
    },
    // {
    //   id: "existing_icp_project_porfolio",
    //   type: "text",
    //   name: "existing_icp_project_porfolio",
    //   required: false,
    //   label: "Exisitng Icp project porfolio",
    //   onFocus: null,
    //   onBlur: null,
    // },
    {
      id: "linkedin_link",
      type: "text",
      name: "linkedin_link",
      required: true,
      label: "LinkedIn link *",
    },
  ];

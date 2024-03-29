export const formFields = [
    {
      id: "title",
      type: "text",
      name: "title",
      required: true,
      label: "Title *",
    },
    {
      id: "description",
      type: "description",
      name: "description",
      required: true,
      label: "Description",
    },
     
    {
      id: "cohort_launch_date",
      type: "date",
      name: "cohort_launch_date",
      required: true,
      label: "Cohort launch date",
    },
    {
      id: "cohort_end_date",
      type: "date",
      name: "cohort_end_date",
      required: true,
      label: "Cohort End date",
    },
    {
      id: "eligibility",
      type: "text",
      name: "eligibility",
      required: true,
      label: "Eligibility Cirteria *",
    },
     {
      id: "rubric_eligibility",
      type: "number",
      name: "rubric_eligibility",
      required: true,
      label: "Level on rubric required for eligibility *",
    },
    {
      id: "no_of_seats",
      type: "number",
      name: "no_of_seats",
      required: true,
      label: "No of seats",
    }
  ];

import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/v1.0.0/quantification-and-analytics-tool",
    },
    {
      type: "category",
      label: "budget",
      items: [
        {
          type: "doc",
          id: "api/v1.0.0/get-budget-list",
          label: "Get Budget list",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/v1.0.0/update-budget",
          label: "Update Budget",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/v1.0.0/add-budget",
          label: "Add Budget",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Schemas",
      items: [
        {
          type: "doc",
          id: "api/v1.0.0/schemas/budget",
          label: "Budget",
          className: "schema",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;

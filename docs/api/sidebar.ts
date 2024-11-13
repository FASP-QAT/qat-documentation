import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/quantification-and-analytics-tool",
    },
    {
      type: "category",
      label: "budget",
      items: [
        {
          type: "doc",
          id: "api/get-budget-list",
          label: "Get Budget list",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/update-budget",
          label: "Update Budget",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/add-budget",
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
          id: "api/schemas/budget",
          label: "Budget",
          className: "schema",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;

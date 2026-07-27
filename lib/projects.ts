export interface ProjectKPI {
    label: string
    value: string
}

export interface Project {
    slug: string
    title: string
    problem: string
    dataset: string
    tools: string[]
    insights: string[]
    category: string
    image: string
    fullDescription?: string
    github?: string
    demo?: string
    kpis?: ProjectKPI[]
    features?: string[]
    daxAnalytics?: string
}

export const projects: Project[] = [
    {
        slug: "phonepe-transaction-analysis",
        title: "PhonePe Transaction Analysis Dashboard",
        problem: "Analyze transaction performance, user behavior, payment status, service usage, and monthly trends across 300K PhonePe transactions worth INR 3.47B.",
        dataset: "PhonePe Transaction dataset (~300K records, INR 3.47B value)",
        tools: ["Power BI", "DAX", "Power Query", "Data Modeling", "Data Visualization"],
        insights: [
            "Analyzed 300K transactions worth INR 3.47B with a 96% successful transaction rate across 108K unique users",
            "Built DAX-based MoM time intelligence, CALCULATE/DATEADD measures, and dynamic Top 5 user segmentations",
            "Implemented custom report page tooltips, service-wise transaction analysis, and weekday vs weekend metrics"
        ],
        category: "Power BI",
        image: "/PhonePay.png",
        github: "https://github.com/ARSHAD-12356/Phone_Pey-Transaction-Analysis",
        kpis: [
            { label: "Total Transaction Value", value: "INR 3.47B" },
            { label: "Total Transactions", value: "300K" },
            { label: "Unique Users", value: "108K" },
            { label: "Success Rate", value: "96%" },
        ],
        features: [
            "Interactive Month and Payment Status slicers",
            "Transaction Value & Count Month-over-Month (MoM) analysis",
            "Monthly transaction trend analysis and dynamic KPI cards",
            "Unique user and active user analysis",
            "Successful, Failed, and Pending transaction analysis",
            "Top 5 Users by Transaction Value",
            "Service-wise Transaction Value analysis",
            "Weekday vs Weekend transaction analysis",
            "User contribution by age group & dynamic Top-N filtering",
            "Custom report page tooltips & mini KPI trend lines",
            "Interactive cross-filtering between dashboard visuals"
        ],
        daxAnalytics: "Created multiple DAX measures for Total Transaction Value, Total Transaction Count, Successful Transactions, Success Rate, Unique Users, Monthly Active Users, Previous Month Transaction Value, Previous Month Transaction Count, Transaction Value MoM %, and Transaction Count MoM %. Used filter context and CALCULATE/DATEADD-based time intelligence to enable dynamic monthly comparisons.",
        fullDescription: "Developed an interactive PhonePe Transaction Analysis Dashboard in Microsoft Power BI to analyze transaction performance, user behavior, payment status, service usage, and monthly transaction trends. Built DAX-based MoM analysis, dynamic KPIs, Top-N analysis, payment-status filtering, custom tooltips, user segmentation, and transaction trend analysis to uncover actionable insights from 300K transactions worth INR 3.47B.",
    },
    {
        slug: "motorola-sales-analysis",
        title: "Motorola Sales Analysis",
        problem: "Analyze KPIs and business metrics to specific insights.",
        dataset: "Sales data records",
        tools: ["Power BI", "DAX", "Data Modeling", "Data Cleaning"],
        insights: [
            "Built interactive Power BI dashboards by performing data cleaning, transformation, and data modeling",
            "Analyzed KPIs and business metrics",
            "Created DAX measures and dynamic visualizations to deliver actionable insights"
        ],
        category: "Power BI",
        image: "/dashboard-sales-analytics.jpg",
        fullDescription: "Built interactive Power BI dashboards by performing data cleaning, transformation, and data modeling to analyze KPIs and business metrics. Created DAX measures and dynamic visualizations to deliver actionable insights and support data-driven decision making.",
    },
    {
        slug: "road-accident-analysis",
        title: "Road Accident Analysis",
        problem: "Analyze casualties by vehicle type, road surface, and other key factors.",
        dataset: "Road accident statistics",
        tools: ["Excel", "Pivot Tables", "Charts", "Slicers"],
        insights: [
            "Built an interactive Road Accident Analysis Dashboard using Excel",
            "Leveraged PivotTables, charts, and slicers to analyze casualties",
            "Transformed raw accident data into actionable insights for decision-making"
        ],
        category: "Excel",
        image: "/financial-dashboard.jpg",
        fullDescription: "Built an interactive Road Accident Analysis Dashboard using Excel, leveraging PivotTables, charts, and slicers to analyze casualties by vehicle type, road surface, and other key factors. Transformed raw accident data into actionable insights, enabling quick identification of high-risk patterns and supporting data-driven decision-making.",
    },
    {
        slug: "customer-churn-analysis",
        title: "Customer Churn Analysis",
        problem: "Identify key churn drivers and support retention strategies.",
        dataset: "Telecom customer data",
        tools: ["Python", "EDA", "Visualization", "Pandas"],
        insights: [
            "Analyzed telecom customer data to identify key churn drivers",
            "Used data cleaning, EDA, and visualization techniques",
            "Built insights-driven dashboards/models to highlight churn patterns"
        ],
        category: "Python",
        image: "/customer-segmentation-chart.jpg",
        fullDescription: "Analyzed telecom customer data to identify key churn drivers using data cleaning, EDA, and visualization techniques. Built insights-driven dashboards/models to highlight churn patterns and support data-driven retention strategies.",
    },
    {
        slug: "sales-dashboard",
        title: "Sales Dashboard",
        problem: "Perform end-to-end sales analysis.",
        dataset: "Sales dataset",
        tools: ["Tableau", "Data Visualization"],
        insights: [
            "Created comprehensive visual reports on Tableau",
            "Analyzed sales performance metrics",
            "Visualized key trends"
        ],
        category: "Tableau",
        image: "/supply-chain-visualization.jpg",
        fullDescription: "An end-to-end sales analysis project that utilizes Tableau for visualization. The dashboard highlights critical KPIs and enables data-driven strategic decisions.",
    },
]

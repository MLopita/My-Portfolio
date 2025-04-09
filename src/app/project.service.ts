import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private projects = [ 
    {
      title: 'Sales Insights Dashboard – ATILQ',
      objective: 'To develop a real-time sales dashboard...',
      summary: 'Built an automated Power BI dashboard...',
      image: 'https://i.pinimg.com/736x/89/fd/8a/89fd8a433b5b78b1cb3d25d02a71fec5.jpg',
      techStack: 'SQL Server, Power BI, ETL, Data Visualization, Automation',
      link: 'https://drive.google.com/...',
      visuals: [
        {
          title: 'Profit Analysis',
          points: [
            'Revenue: ₹142.22M | Sales Quantity: 350K | Profit: ₹2.06M',
            'City-wise profit and revenue visuals',
            'Monthly trend (line chart) and customer performance'
          ]
        },
        {
          title: 'Performance Insight',
          points: [
            'Market-wise revenue contribution',
            'Profit Target Slider',
            'Bar & Line combo chart for region performance',
            'Matrix showing customer-wise profit'
          ]
        },
        {
          title: 'Data Pane / Model Screenshot',
          points: [
            'Show schema design, relationships, and calculated fields',
            'Optional: show key DAX measures used for KPIs'
          ]
        }
      ],
      insights: [
        'Excel and Electricalsara drove the highest profits.',
        'Lucknow identified as an underperforming region (-2.7%).',
        'Helped reduce sales spend by 10% through better regional strategy.',
        'Enabled the team to dynamically filter and explore performance by city/product.'
      ]
    }
  ];

  getProjects() {
    return this.projects;
  }

  getProjectByTitle(title: string) {
    return this.projects.find(p => p.title === decodeURIComponent(title));
  }
}

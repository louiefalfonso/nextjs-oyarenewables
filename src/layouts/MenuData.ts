interface DataType {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menus?: {
      link: string;
      title: string;
  }[];
}


// menu data
const menu_data: DataType[] = [
	{
		id: 1,
		title: "Home",
		link: "/",
		has_dropdown: false
	},
	{
		id: 2,
		title: "About Us",
		link: "/about",
		has_dropdown: false
	},
	{
		id: 3,
		title: "Services",
		link: "/services",
		has_dropdown: true,
		sub_menus: [
			{ link: "/solar-panels-services", title: "Solar Pannel Services" },
			{ link: "/roof-solar-panels", title: "Roof Solar Panels" },
			{ link: "/commercial-roofing", title: "Commercial Roofing" }
		],
	},
	{
		id: 4,
		title: "Projects",
		link: "/projects",
		has_dropdown: false
	},
	{
		id: 5,
		title: "FAQ",
		link: "/faq",
		has_dropdown: false
	},
	{
		id: 6,
		title: "Teams",
		link: "/teams",
		has_dropdown: false
	},
	{
		id: 7,
		title: "Contact Us",
		link: "/contact",
		has_dropdown: false
	}
	
];
export default menu_data;

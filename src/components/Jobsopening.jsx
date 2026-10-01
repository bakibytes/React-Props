import Card from "./Card";
import '../App.css'
export default function Jobsopening() {
    const jobs = [
        {
            id: 1,
            companyIcon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjeX6ku69_92RMDzmUn_e0swxsNonUDN2JaTZ_XamgOw&s=10",
            companyName: "Google",
            datePosted: "5 days ago",
            role: "Senior UI/UX Developer",
            tag1: "Full-time",
            tag2: "Remote",
            income: "$120/hr",
            location: "Mumbai, Maharashtra",
        },
        {
            id: 2,
            companyIcon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEJANb0XItp3xw1MB-dF4ccHxxCtgDc7auj-nAXlk-vw&s=10",
            companyName: "Microsoft",
            datePosted: "1 week ago",
            role: "Frontend Developer",
            tag1: "Full-time",
            tag2: "Remote",
            income: "$110/hr",
            location: "Bengaluru, Karnataka",
        },
        {
            id: 3,
            companyIcon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmYAKJatds4OTsaI-L9AtIC1EwXknRMCO6Zi5pjBYLJw&s=10",
            companyName: "Amazon",
            datePosted: "2 weeks ago",
            role: "React Developer",
            tag1: "Part-time",
            tag2: "Hybrid",
            income: "$95/hr",
            location: "Hyderabad, Telangana",
        },
        {
            id: 4,
            companyIcon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRU5H998rYo129W48um8j_SP5gxrDpfo9l0H1Ghpe8qw&s=10",
            companyName: "Apple",
            datePosted: "3 days ago",
            role: "Product Designer",
            tag1: "Full-time",
            tag2: "On-site",
            income: "$130/hr",
            location: "Pune, Maharashtra",
        },
        {
            id: 5,
            companyIcon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5_0VDe_Q5awivMLm1OVclYTFjlogcxkjzJB_qr9jVXQ&s=10",
            companyName: "Meta",
            datePosted: "4 days ago",
            role: "Senior Frontend Engineer",
            tag1: "Full-time",
            tag2: "Remote",
            income: "$125/hr",
            location: "Gurugram, Haryana",
        },
        {
            id: 6,
            companyIcon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1CWbpNDsBKFaIsmydAKMHtiy-Rv--Cl4lbLLyz3CFaA&s=10",
            companyName: "Netflix",
            datePosted: "2 weeks ago",
            role: "UI/UX Designer",
            tag1: "Part-time",
            tag2: "Remote",
            income: "$105/hr",
            location: "Mumbai, Maharashtra",
        },
        {
            id: 7,
            companyIcon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGbscCf3uS3qeBinLoSq8IqfK0XLDySWFWwnKqHXOO9A&s=10",
            companyName: "Adobe",
            datePosted: "6 days ago",
            role: "Full Stack Developer",
            tag1: "Full-time",
            tag2: "Hybrid",
            income: "$100/hr",
            location: "Noida, Uttar Pradesh",
        },
        {
            id: 8,
            companyIcon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTryjghVtlUo91RnbuEKK_FLLRzEOeiQXZNtl90lrTK7A&s=10",
            companyName: "IBM",
            datePosted: "1 week ago",
            role: "Software Engineer",
            tag1: "Full-time",
            tag2: "On-site",
            income: "$90/hr",
            location: "Bengaluru, Karnataka",
        },
    ];

    return (
        <div className="parent">
            {jobs.map((job) => {
                return <Card icon={job.companyIcon} name={job.companyName} date={jobs.datePosted} role={job.role} tag1={job.tag1} tag2={job.tag2} income={job.income} location={job.location} />
            })}
        </div>
    )
}

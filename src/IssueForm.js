import React, {useState} from "react";


const IssueForm = ({ onCancelClick }) => {
    const [issueType, setIssueType] = useState("bug");
    const [impact, setImpact] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [section, setSection] = useState("");
    const [subSection, setSubSection] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();

        //console.log(issueType,"issueType");
        setIsSubmitting(true);
        let x ={
            issueType,
            impact,
            title,
            description,
            section,
            subSection
        }
        alert(JSON.stringify(x));
        alert("Ticket raised successfully.");
    }

    const handleChange =(e) =>{
        //console.log(e.target.name, e.target.value)
        if(e.target.name === "issueType") setIssueType(e.target.value);
        if(e.target.name === "impact") setImpact(e.target.value);
        if(e.target.name === "title") setTitle(e.target.value);
        if(e.target.name === "description") setDescription(e.target.value);
        if(e.target.name === "section") setSection(e.target.value);
        if(e.target.name === "sub-section") setSubSection(e.target.value);
    }

return (
  <form>
    <div className="form-group">
      <label htmlFor="issueType">Issue Type</label>
      <div className="radio">
        <label>
          <input
            name="issueType"
            type="radio"
            value="bug"
            checked={true}
            onChange={handleChange}
          />
          Bug
        </label>
        <label>
          <input
            name="issueType"
            type="radio"
            value="enhancement"
            onChange={handleChange}
          />
          Enhancement
        </label>
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="impact">Impact</label>
      <select name="impact" onChange={handleChange}>
        <option value="">Select</option>
        <option value="blocking">Stop's me from doing my work</option>
        <option value="nonblocking">Non - blocking</option>
      </select>
    </div>
    <div className="form-group">
      <label htmlFor="title">Title</label>
      <input
        name="title"
        type="text"
        onChange={handleChange}
        value={title}
      />
    </div>
    <div className="form-group">
      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        onChange={handleChange}
        value={description}
      />
    </div>
    <div className="form-group">
      <label htmlFor="section">Section</label>
      <select name="section" onChange={handleChange}>
        <option value="">Select</option>
        <option value="loan">Loan</option>
        <option value="order">Order</option>
      </select>
    </div>
    <div className="form-group">
      <label htmlFor="sub-section">Sub-Section</label>
      <select name="sub-section" onChange={handleChange}>
        <option value="">Select</option>
        <option value="Home-page">Home-page</option>
        <option value="cart-page">Cart</option>
      </select>
    </div>
    <button className="cancel-btn" onClick={onCancelClick}>
      Cancel
    </button>
    <button className="submit-btn" onClick={handleSubmit} type="submit" disabled={isSubmitting}>
      Raise Ticket
    </button>
  </form>
);
}

export default IssueForm;

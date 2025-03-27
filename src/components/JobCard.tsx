import React, { useState } from "react";
import { Jobs } from "../types/JobPost";
import header_img from "../assets/1.jpg";
import { useProposals } from "../contexts/DataContext";

// Types for the Proposal Form
interface ProposalFormData {
  freelancerId: string;
  coverLetter: string;
  bidAmount: number;
}

// Main Component
const JobComponent: React.FC<Jobs> = (props) => {
  const [slide, setSlide] = useState(true); // true => Slide 1, false => Slide 2
  const [showForm, setShowForm] = useState(false);

  // Example only
  const mockFreelancerId = "user-123";

  // From your DataContext
  const { addProposal } = useProposals();

  // Toggle slides on card click (except on .no-slide elements)
  const handleCardClick = (e: React.MouseEvent) => {
    const targetElement = e.target as HTMLElement;
    if (targetElement.closest(".no-slide")) return;
    setSlide((prev) => !prev);
  };

  // Jump specifically to Slide 1
  const scrollPrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSlide(true);
  };

  // Jump specifically to Slide 2
  const scrollNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSlide(false);
  };

  // Open the proposal form (pop-up modal)
  const handleApplyClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Don’t toggle slides
    setShowForm(true);
  };

  // On form submit, create a new proposal
  const handleSubmitProposal = (data: ProposalFormData) => {
    const newProposal = {
      id: `proposal-${Date.now()}`,
      freelancerId: data.freelancerId,
      jobId: props.user_id,
      coverLetter: data.coverLetter,
      bidAmount: data.bidAmount,
      status: "pending",
      createdAt: new Date(),
    };
    addProposal(newProposal);
    setShowForm(false);
  };

  return (
    <div
      className="w-full cursor-pointer rounded-lg border border-gray-200 bg-white text-center shadow"
      onClick={handleCardClick}
    >
      {/* --- SLIDE 1 --- */}
      {slide && (
        <div className="p-0">
          <img
            className="h-36 w-full rounded-t-lg object-cover md:h-48"
            src={header_img}
            alt="img"
          />
          <div className="px-4 py-5">
            <img
              className="-mt-16 mb-2 inline-block w-1/3 rounded-lg border-4 border-white"
              src={header_img}
              alt="Logo"
            />
            <h5 className="mb-1 overflow-hidden text-lg font-bold capitalize text-gray-800">
              {props.name}
            </h5>
            <div
              className={`grid ${
                props.product_count > 0 ? "grid-cols-2 gap-2" : "grid-cols-1"
              }`}
            >
              {props.product_count > 0 && (
                <div className="text-center">
                  Employees <br />
                  <span className="font-bold">{props.product_count}</span>
                </div>
              )}
              <div className="text-center">
                Applications <br />
                <span className="font-bold">{props.follower_count}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- SLIDE 2 --- */}
      {!slide && (
        <div className="p-0">
          <div className="w-full p-3 text-center font-semibold capitalize">
            {props.activity_sector}
          </div>
          <hr className="border-t border-green-400" />
          <div className="text-right">
            <h1 className="m-3 text-center text-sm text-gray-800">
              Présentation de <strong>{props.name}</strong>
            </h1>
            <p className="mb-5 max-h-44 overflow-hidden px-3 text-justify text-sm">
              {props.description?.slice(0, 250) || "Aucune description"}
            </p>
            {/* Apply Button */}
            <button
              className="no-slide my-2 mr-5 inline-flex items-center gap-1 rounded-full border border-green-500 px-3 py-1 text-sm font-medium text-green-500 transition-colors hover:bg-green-500 hover:text-white"
              onClick={handleApplyClick}
            >
              Apply
            </button>
          </div>
        </div>
      )}

      {/* --- DOT INDICATORS --- */}
      <div className="flex justify-center gap-2 py-2">
        {/* Dot for Slide 1 */}
        <div
          className={`h-2 w-2 rounded-full ${
            slide ? "bg-green-400" : "bg-gray-300"
          }`}
          onClick={scrollPrev}
        />
        {/* Dot for Slide 2 */}
        <div
          className={`h-2 w-2 rounded-full ${
            !slide ? "bg-green-400" : "bg-gray-300"
          }`}
          onClick={scrollNext}
        />
      </div>

      {/* --- MODAL (Proposal Form) --- */}
      {showForm && (
        <ProposalModal
          onClose={() => setShowForm(false)}
          onSubmit={handleSubmitProposal}
          defaultFreelancerId={mockFreelancerId}
        />
      )}
    </div>
  );
};

export default JobComponent;

/** ----------------------------------------------------------------
 * PROPOSAL MODAL
 * ----------------------------------------------------------------*/
interface ProposalModalProps {
  onClose: () => void;
  onSubmit: (data: ProposalFormData) => void;
  defaultFreelancerId: string;
}

const ProposalModal: React.FC<ProposalModalProps> = ({
  onClose,
  onSubmit,
  defaultFreelancerId,
}) => {
  const [freelancerId, setFreelancerId] = useState(defaultFreelancerId);
  const [coverLetter, setCoverLetter] = useState("");
  const [bidAmount, setBidAmount] = useState<number>(0);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ freelancerId, coverLetter, bidAmount });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-xl font-bold text-gray-800">Apply for Job</h2>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="freelancerId"
              className="block text-sm font-medium text-gray-700"
            >
              Freelancer ID
            </label>
            <input
              id="freelancerId"
              type="text"
              value={freelancerId}
              onChange={(e) => setFreelancerId(e.target.value)}
              className="mt-1 w-full rounded border border-gray-300 p-2 text-gray-700 focus:ring-1 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="coverLetter"
              className="block text-sm font-medium text-gray-700"
            >
              Cover Letter
            </label>
            <textarea
              id="coverLetter"
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
              rows={4}
              className="mt-1 w-full rounded border border-gray-300 p-2 text-gray-700 focus:ring-1 focus:ring-green-500"
              placeholder="Briefly describe why you are the right fit..."
              required
            />
          </div>
          <div>
            <label
              htmlFor="bidAmount"
              className="block text-sm font-medium text-gray-700"
            >
              Bid Amount
            </label>
            <input
              id="bidAmount"
              type="number"
              value={bidAmount}
              onChange={(e) => setBidAmount(Number(e.target.value))}
              className="mt-1 w-full rounded border border-gray-300 p-2 text-gray-700 focus:ring-1 focus:ring-green-500"
              required
            />
          </div>
          <div className="flex items-center justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

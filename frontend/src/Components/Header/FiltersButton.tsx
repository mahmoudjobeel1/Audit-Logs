import { Modal, Button } from "flowbite-react";
import { useState } from "react";
import { FilterIcon } from "../../assests";
import { useFilterStore } from "../../store/filters";

interface IFilterInputType {
  id?: string;
  placeholder?: string;
  onInputChange?: (e: any) => void;
  children?: React.ReactNode;
  value?: string;
}

const FilterInput: React.FC<IFilterInputType> = ({
  id,
  placeholder,
  onInputChange,
  children,
  value,
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-sm font-medium text-stone-600">
        {placeholder}
      </label>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 placeholder:text-xs"
        onChange={onInputChange}
        value={value}
      />
    </div>
  );
};

const DateTimeInput: React.FC<IFilterInputType> = ({
  id,
  placeholder,
  onInputChange,
  children,
  value,
}) => {
  const initialValue = value ? new Date(value) : new Date();
  const initialDate = initialValue.toISOString().split("T")[0];
  const initialTime = initialValue.toTimeString().split(" ")[0].substring(0, 5);

  const [date, setDate] = useState(value ? initialDate : "");
  const [time, setTime] = useState(value ? initialTime : "");

  const handleDateChange = (e: any) => {
    const newDate = e.target.value;
    setDate(newDate);
    if (newDate && time && onInputChange) {
      onInputChange({ target: { value: new Date(`${newDate}T${time}`) } });
    }
  };

  const handleTimeChange = (e: any) => {
    const newTime = e.target.value;
    setTime(newTime);
    if (date && newTime && onInputChange) {
      onInputChange({ target: { value: new Date(`${date}T${newTime}`) } });
    }
  };

  return (
    <div className="flex flex-col col-span-2">
      <label
        htmlFor={`${id}_date`}
        className="text-sm font-medium text-stone-600"
      >
        {placeholder}
      </label>
      <div className="flex flex-row w-full gap-2">
        <input
          type="date"
          id={`${id}_date`}
          className="max-w-sm mt-2 text-sm placeholder:text-xs text-stone-600 w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          onChange={handleDateChange}
          value={date}
        />
        <input
          type="time"
          id={`${id}_time`}
          className="max-w-sm mt-2 w-full placeholder:text-xs text-sm text-stone-600 rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          onChange={handleTimeChange}
          value={time}
        />
      </div>
    </div>
  );
};

export default function FiltersButton() {
  const { updateFilters } = useFilterStore();
  const [openModal, setOpenModal] = useState(false);
  const [actorId, setActorId] = useState("");
  const [targetId, setTargetId] = useState("");
  const [actionId, setActionId] = useState("");
  const [actionName, setActionName] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  return (
    <>
      <button
        className="w-full md:w-auto flex items-center justify-center py-2 px-4 bg-gray-100 text-sm font-medium text-gray-500 focus:outline-none  rounded-lg border border-gray-200 hover:bg-gray-200 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        type="button"
        onClick={() => setOpenModal(true)}
      >
        {FilterIcon}
        Filters
      </button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Search Filters</Modal.Header>
        <Modal.Body>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <FilterInput
              id="actor_id"
              onInputChange={(e) => setActorId(e.target.value)}
              placeholder="Actor ID"
              value={actorId}
            />
            <FilterInput
              id="target_id"
              onInputChange={(e) => setTargetId(e.target.value)}
              placeholder="Target ID"
              value={targetId}
            />
            <FilterInput
              id="action_id"
              onInputChange={(e) => setActionId(e.target.value)}
              placeholder="Action ID"
              value={actionId}
            />
            <FilterInput
              id="action_name"
              onInputChange={(e) => setActionName(e.target.value)}
              placeholder="Action name"
              value={actionName}
            />
            <DateTimeInput
              id="from"
              onInputChange={(e) => setFromDate(e.target.value)}
              placeholder="from"
              value={fromDate}
            />
            <DateTimeInput
              id="to"
              onInputChange={(e) => setToDate(e.target.value)}
              placeholder="to"
              value={toDate}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              setOpenModal(false);
              updateFilters({
                actorId,
                targetId,
                actionId,
                actionName,
                occurredAtStart: fromDate,
                occurredAtEnd: toDate,
              });
            }}
          >
            Search
          </Button>
          <Button
            color="gray"
            onClick={() => {
              setActionId("");
              setActionName("");
              setActorId("");
              setTargetId("");
              setFromDate("");
              setToDate("");
              updateFilters({
                actorId: "",
                targetId:"",
                actionId:"",
                actionName:"",
                occurredAtStart:"",
                occurredAtEnd:"",
              });
            }}
          >
            Reset
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

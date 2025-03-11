import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Calendar, Clock, User, Mail, Check } from 'lucide-react';

const AppointmentPage = () => {
  const [selectedDate, setSelectedDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const [timeSlot, setTimeSlot] = useState('');
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  const timeSlots = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
  ];

  const handleDateChange = ranges => {
    setSelectedDate([ranges.selection]);
  };

  const handleInputChange = e => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleBooking = () => {
    if (!userInfo.name || !userInfo.email || !timeSlot) {
      alert('Please fill in all required fields to book an appointment.');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsBooked(true);
    }, 1500);
  };

  if (isBooked) {
    return (
      <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold mb-2 text-gray-800">
            Appointment Confirmed!
          </h2>
          <p className="text-gray-600 mb-6">
            We've booked your appointment for{' '}
            {selectedDate[0].startDate.toDateString()} at {timeSlot}. A
            confirmation email has been sent to {userInfo.email}.
          </p>
          <button
            onClick={() => setIsBooked(false)}
            className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition duration-200"
          >
            Book Another Appointment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-0 bg-white shadow-lg rounded-lg mt-10 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#16A34A] to-[#4ADE74] p-6 text-white">
        <h2 className="text-2xl font-bold mb-1">Book Your Appointment</h2>
        <p className="opacity-80">Select a date and time that works for you</p>
      </div>

      <div className="p-6">
        {/* Progress Steps */}
        <div className="flex justify-between mb-8">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-[#16A34A] text-white flex items-center justify-center">
              1
            </div>
            <span className="text-sm mt-1 text-gray-600">Date</span>
          </div>
          <div className="flex-1 border-t-2 border-blue-200 self-center mx-2"></div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-blue-100 text-[#16A34A] flex items-center justify-center">
              2
            </div>
            <span className="text-sm mt-1 text-gray-600">Details</span>
          </div>
          <div className="flex-1 border-t-2 border-gray-200 self-center mx-2"></div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">
              3
            </div>
            <span className="text-sm mt-1 text-gray-600">Confirm</span>
          </div>
        </div>

        {/* Date and Time Selection */}
        <div className="mb-8">
          <div className="flex items-center mb-4 text-gray-800">
            <Calendar className="w-5 h-5 mr-2 text-[#16A34A]" />
            <h3 className="text-lg font-semibold">Select Date & Time</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <DateRange
                ranges={selectedDate}
                onChange={handleDateChange}
                minDate={new Date()}
                rangeColors={['#2563eb']}
                className="border-0"
              />
            </div>

            <div className="ml-10  mt-4">
              <p className="font-medium text-gray-700 mb-3 flex items-center">
                <Clock className="w-4 h-4 mr-2 text-[#16A34A]" />
                Available Time Slots
              </p>
              <div className="grid grid-cols-2 gap-2">
                {timeSlots.map(slot => (
                  <button
                    key={slot}
                    className={`py-2 px-4 border rounded-md text-sm font-medium transition-colors
                      ${
                        timeSlot === slot
                          ? 'bg-[#16A34A] text-white border-[#16A34A]'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                      }`}
                    onClick={() => setTimeSlot(slot)}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* User Info Form */}
        <div className="mb-6">
          <div className="flex items-center mb-4 text-gray-800">
            <User className="w-5 h-5 mr-2 text-[#16A34A]" />
            <h3 className="text-lg font-semibold">Your Information</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-gray-700 text-sm mb-1">
                Full Name*
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={userInfo.name}
                  onChange={handleInputChange}
                  className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16A34A] focus:border-[#16A34A] transition-colors"
                  placeholder="Feroj Sarker"
                />
                <User className="w-4 h-4 text-gray-500 absolute left-3 top-3.5" />
              </div>
            </div>

            <div>
              <label className="block font-medium text-gray-700 text-sm mb-1">
                Email Address*
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleInputChange}
                  className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16A34A] focus:border-[#16A34A] transition-colors"
                  placeholder="feroj@example.com"
                />
                <Mail className="w-4 h-4 text-gray-500 absolute left-3 top-3.5" />
              </div>
            </div>

            <div>
              <label className="block font-medium text-gray-700 text-sm mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={userInfo.phone}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16A34A] focus:border-[#16A34A] transition-colors"
                placeholder="o1xxxxxxxxx"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block font-medium text-gray-700 text-sm mb-1">
                Additional Notes
              </label>
              <textarea
                name="notes"
                value={userInfo.notes}
                onChange={handleInputChange}
                rows="3"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16A34A] focus:border-[#16A34A] transition-colors"
                placeholder="Any special requests or information we should know..."
              ></textarea>
            </div>
          </div>
        </div>

        {/* Appointment Summary */}
        {(userInfo.name || timeSlot) && (
          <div className="mb-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h4 className="font-semibold text-gray-800 mb-2">
              Appointment Summary
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-gray-600">Date:</div>
              <div className="font-medium text-gray-800">
                {selectedDate[0].startDate.toDateString()}
              </div>

              {timeSlot && (
                <>
                  <div className="text-gray-600">Time:</div>
                  <div className="font-medium text-gray-800">{timeSlot}</div>
                </>
              )}

              {userInfo.name && (
                <>
                  <div className="text-gray-600">Name:</div>
                  <div className="font-medium text-gray-800">
                    {userInfo.name}
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          onClick={handleBooking}
          disabled={isSubmitting}
          className={`w-full py-3 px-4 rounded-lg font-semibold text-white shadow-md transition duration-200 flex items-center justify-center
            ${
              isSubmitting
                ? 'bg-[#16A34A] cursor-not-allowed'
                : 'bg-[#16A34A] hover:bg-blue-700 hover:shadow-lg'
            }`}
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </>
          ) : (
            'Confirm Appointment'
          )}
        </button>
      </div>
    </div>
  );
};

export default AppointmentPage;

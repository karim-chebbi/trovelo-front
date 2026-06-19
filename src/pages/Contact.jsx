import React, { useState } from "react";
import { Zap, Mail, Phone, MapPin } from "lucide-react";
import { Button, Input } from "antd";

const { TextArea } = Input;

const contactInfo = [
  {
    name: "Email us",
    description:
      "Drop us a line and we'll get back to you within one business day.",
    icon: Mail,
    detail: "support@trovelo.com",
  },
  {
    name: "Call us",
    description:
      "Mon–Fri, 9am–6pm. Talk to a real human about your order or listing.",
    icon: Phone,
    detail: "+1 (555) 012-3456",
  },
  {
    name: "Visit us",
    description: "Stop by our showroom to test ride before you buy.",
    icon: MapPin,
    detail: "123 Market Street, San Francisco, CA",
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = () => {
    // Wire this up to your existing contact/email action
    console.log("Contact form submitted:", form);
  };

  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-3xl py-24 sm:py-32 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600 mb-6">
            <Zap className="size-4 fill-blue-500 text-blue-500" />
            Contact Trovelo
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-6xl">
            We're here to help
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Questions about an order, a listing, or just want to say hi? Reach
            out through any of the channels below, or send us a message
            directly.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-3 mb-20">
          {contactInfo.map((item) => (
            <div key={item.name} className="flex flex-col items-start">
              <div className="rounded-lg bg-blue-500 p-2.5 mb-4">
                <item.icon className="size-5 text-white" aria-hidden="true" />
              </div>
              <dt className="text-base font-semibold text-ink">{item.name}</dt>
              <dd className="mt-2 text-base leading-7 text-slate-600">
                {item.description}
              </dd>
              <dd className="mt-2 text-sm font-medium text-blue-600">
                {item.detail}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border border-slate-100 bg-ice/40 p-8 sm:p-10">
            <h2 className="text-xl font-semibold text-ink mb-6">
              Send us a message
            </h2>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Name
                </label>
                <Input
                  size="large"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange("name")}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Email
                </label>
                <Input
                  size="large"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange("email")}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Message
                </label>
                <TextArea
                  rows={5}
                  placeholder="How can we help?"
                  value={form.message}
                  onChange={handleChange("message")}
                />
              </div>
              <Button
                onClick={handleSubmit}
                type="primary"
                size="large"
                block
                className="bg-blue-500! hover:bg-blue-600! border-none!"
              >
                Send message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

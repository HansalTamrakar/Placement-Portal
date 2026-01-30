import {
  UserIcon,
  LockClosedIcon,
  BellIcon,
  CreditCardIcon,
  ShieldCheckIcon,
  ArrowLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

export default function LeftProfileSection() {
  return (
    <div className=" fixed left-12 top-24 z-50  flex justify-center pt-16 mr-4  ">
      <div className="w-[360px] bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* Header */}
        <div className="flex items-center gap-3 p-4">
          <ArrowLeftIcon className="w-6 h-6 text-gray-600" />
        </div>

        {/* Profile */}
        <div className="flex flex-col items-center p-6 border-b">
          <img
            src="https://i.pravatar.cc/150"
            alt="profile"
            className="w-24 h-24 rounded-full border-4 border-orange-400"
          />
          <h2 className="mt-3 text-lg font-semibold text-gray-900">
            Dawid Jankowski
          </h2>
          <p className="text-sm text-gray-500">
            example@example.com
          </p>
        </div>

        {/* Settings */}
        <div className="p-4 space-y-6">

          {/* Profile settings */}
          <div>
            <p className="text-xs text-gray-400 mb-2">Profile settings</p>

            <SettingItem
              icon={<UserIcon className="w-5 h-5 text-green-600" />}
              title="Your data"
              subtitle="Update and modify your profile"
            />

            <SettingItem
              icon={<LockClosedIcon className="w-5 h-5 text-blue-600" />}
              title="Privacy"
              subtitle="Change email and password"
            />

            <SettingItem
              icon={<BellIcon className="w-5 h-5 text-orange-500" />}
              title="Notifications"
              subtitle="Change notification settings"
            />
          </div>

          {/* Card settings */}
          <div>
            <p className="text-xs text-gray-400 mb-2">Card settings</p>

            <SettingItem
              icon={<CreditCardIcon className="w-5 h-5 text-red-500" />}
              title="Payment settings"
              subtitle="Update your payments settings"
            />

            <SettingItem
              icon={<ShieldCheckIcon className="w-5 h-5 text-indigo-500" />}
              title="Payment protection"
              subtitle="Secure your payments"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

/* Reusable Row */
function SettingItem({ icon, title, subtitle }) {
  return (
    <div className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-100 cursor-pointer">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
          {icon}
        </div>
        <div>
          <p className="text-sm font-medium text-gray-900">{title}</p>
          <p className="text-xs text-gray-500">{subtitle}</p>
        </div>
      </div>
      <ChevronRightIcon className="w-5 h-5 text-gray-400" />
    </div>
  );
}

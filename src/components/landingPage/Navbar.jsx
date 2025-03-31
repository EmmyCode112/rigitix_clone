import { icons } from "@/assets/asset";
import { Link, useNavigate } from "react-router-dom";
import Button from "@/components/buttons/Button";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-10">
        <div>
          <Link to="/">
            <img src={icons.rigitix} className="cursor-pointer" />
          </Link>
        </div>
        <ul className="flex gap-8">
          <Link to="/">
            <li className="text-[16px] text-white font-semibold">Home</li>
          </Link>
          <Link to="/about">
            <li className="text-[16px] text-white font-semibold">About</li>
          </Link>
          <Link to="/features">
            <li className="text-[16px] text-white font-semibold">Features</li>
          </Link>
          <Link to="/pricing">
            <li className="text-[16px] text-white font-semibold">Pricing</li>
          </Link>
          <Link to="/blog">
            <li className="text-[16px] text-white font-semibold">Blog</li>
          </Link>

          <Link to="/developers_hub">
            <li className="text-[16px] text-white font-semibold">
              Developers Hub
            </li>
          </Link>
          <Link to="/contact-us">
            <li className="text-[16px] text-white font-semibold">Contact us</li>
          </Link>
        </ul>
      </div>
      <div className="flex gap-4 items-center">
        <p
          className="text-[16px] text-white font-semibold cursor-pointer"
          onClick={() => navigate("/sign-in")}
        >
          Sign in
        </p>
        <Button
          label="Sign Up"
          className="py-3 px-6 bg-[#F87B07] text-white rounded-[12px] text-white font-semibold text-[16px] border-none"
          onClick={() => navigate("/sign-up")}
        />
      </div>
    </div>
  );
};

export default Navbar;

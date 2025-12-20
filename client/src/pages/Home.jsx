import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const subjects = [
  "Computer Networks",
  "Operating Systems",
  "DBMS",
  "OOPS",
  "JavaScript"
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-10">
        Choose a Subject 📚
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {subjects.map((sub, i) => (
          <motion.div
            key={sub}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Card
              onClick={() => navigate(`/quiz/${sub}`)}
              className="cursor-pointer hover:shadow-xl transition"
            >
              <CardContent className="p-6 text-center font-semibold">
                {sub}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;

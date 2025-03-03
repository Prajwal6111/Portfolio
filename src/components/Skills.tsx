import {  FaPython, FaAws } from 'react-icons/fa';
import {  SiPowerbi } from 'react-icons/si';
import { SiSnowflake, SiDbt, SiApacheairflow } from 'react-icons/si';
import { BiLogoPostgresql } from "react-icons/bi";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { VscTerminalPowershell } from "react-icons/vsc";
import { GrOracle } from "react-icons/gr";
import { TbBrandDatabricks } from "react-icons/tb";

const Skills = ({ theme }: { theme: string }) => (
  <div id="skills" className={`py-8 px-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
    <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
    <div className="flex flex-wrap justify-center gap-5 max-w-4xl mx-auto">
      {/* Skill Cards */}
      {[
        { Icon: TbBrandDatabricks, name: 'Databricks', color: 'text-red-600' },
        { Icon: FaPython, name: 'Python', color: 'text-blue-400' },
        { Icon: AiOutlineConsoleSql, name: 'SQL', color: 'text-orange-600' },
        { Icon: SiDbt, name: 'dbt', color: 'text-orange-600' },
        { Icon: SiSnowflake, name: 'Snowflake', color: 'text-blue-300' },
        { Icon: SiApacheairflow, name: 'Airflow', color: 'text-DarkSlateGray-200' },
        { Icon: FaAws, name: 'AWS', color: 'text-WHITE-500' },
        { Icon: VscTerminalPowershell, name: 'UNIX', color: 'text-blue-500' },
        { Icon: GrOracle, name: 'Oracle', color: 'text-red-600' },
        { Icon: BiLogoPostgresql, name: 'PostreSQL', color: 'text-black-700' },
        { Icon: SiPowerbi, name: 'Power BI', color: 'text-yellow-400' }
      ].map((skill, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center p-3 w-24 h-24 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 bg-white hover:shadow-lg transition-all duration-300"
        >
          <skill.Icon className={`text-3xl ${skill.color}`} />
          <p className="mt-2 font-medium text-sm">{skill.name}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;

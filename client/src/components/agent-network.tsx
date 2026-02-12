import { motion } from "framer-motion";

const nodes = [
  { id: "orchestrator", x: 50, y: 30, label: "Orchestrator" },
  { id: "agent1", x: 20, y: 70, label: "Agent A" },
  { id: "agent2", x: 50, y: 80, label: "Agent B" },
  { id: "agent3", x: 80, y: 70, label: "Agent C" },
];

const connections = [
  { from: "orchestrator", to: "agent1" },
  { from: "orchestrator", to: "agent2" },
  { from: "orchestrator", to: "agent3" },
  { from: "agent1", to: "agent2" },
  { from: "agent2", to: "agent3" },
];

export function AgentNetwork() {
  const getNodePosition = (id: string) => {
    const node = nodes.find(n => n.id === id);
    return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
  };

  return (
    <div className="relative w-full h-64 md:h-72 lg:h-80" data-testid="agent-network-diagram">
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.3" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {connections.map((conn, index) => {
          const from = getNodePosition(conn.from);
          const to = getNodePosition(conn.to);
          return (
            <motion.line
              key={`${conn.from}-${conn.to}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="currentColor"
              strokeWidth="0.3"
              className="text-muted-foreground"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ 
                duration: 1.5, 
                delay: 0.8 + index * 0.15,
                ease: "easeOut"
              }}
            />
          );
        })}

        {connections.map((conn, index) => {
          const from = getNodePosition(conn.from);
          const to = getNodePosition(conn.to);
          const midX = (from.x + to.x) / 2;
          const midY = (from.y + to.y) / 2;
          
          return (
            <motion.circle
              key={`pulse-${conn.from}-${conn.to}`}
              r="0.8"
              className="text-foreground"
              fill="currentColor"
              initial={{ cx: from.x, cy: from.y, opacity: 0 }}
              animate={{
                cx: [from.x, midX, to.x],
                cy: [from.y, midY, to.y],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 2.5,
                delay: 2 + index * 0.4,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {nodes.map((node, index) => (
          <g key={node.id}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="4"
              className="text-muted"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="0.5"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.3 + index * 0.1,
                type: "spring",
                stiffness: 200
              }}
            />

            <motion.circle
              cx={node.x}
              cy={node.y}
              r="4"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.3"
              className="text-foreground"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{
                duration: 2,
                delay: 1.5 + index * 0.3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <motion.circle
              cx={node.x}
              cy={node.y}
              r="1.5"
              className="text-foreground"
              fill="currentColor"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                duration: 0.3, 
                delay: 0.5 + index * 0.1
              }}
            />

            <motion.text
              x={node.x}
              y={node.y + 8}
              textAnchor="middle"
              className="text-muted-foreground fill-current"
              fontSize="3"
              fontFamily="monospace"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 1 + index * 0.1 }}
            >
              {node.label}
            </motion.text>
          </g>
        ))}

        <motion.text
          x="50"
          y="12"
          textAnchor="middle"
          className="text-muted-foreground fill-current"
          fontSize="2.5"
          fontFamily="monospace"
          letterSpacing="0.1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 2 }}
        >
          AGENT TOPOLOGY
        </motion.text>
      </svg>
    </div>
  );
}

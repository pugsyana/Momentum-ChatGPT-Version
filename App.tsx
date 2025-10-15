import React from 'react';

type Project = {
  id: string;
  title: string;
  status: string;
  [key: string]: any;
};

function OriginalApp() {
  return <div style={{ padding: 16 }}>App content</div>;
}

export default function App() {
  const [projects, setProjects] = React.useState<Project[]>([]);

  const handleProjectMove = (
    draggedId: string,
    targetStatus: string,
    targetId?: string,
    position?: 'before' | 'after'
  ) => {
    if (!draggedId) return;
    setProjects(currentProjects => {
      const projectToMove = currentProjects.find(p => p.id === draggedId);
      if (!projectToMove) return currentProjects;
      if (targetId && draggedId === targetId) return currentProjects;

      const moved = { ...projectToMove, status: targetStatus };
      const remaining = currentProjects.filter(p => p.id !== draggedId);

      let insertAt = remaining.length;
      if (targetId && position) {
        const idx = remaining.findIndex(p => p.id === targetId);
        if (idx !== -1) insertAt = position === 'before' ? idx : idx + 1;
      } else {
        const lastIdxInColumn = remaining.map(p => p.status).lastIndexOf(targetStatus);
        if (lastIdxInColumn !== -1) insertAt = lastIdxInColumn + 1;
      }

      const next = [...remaining];
      next.splice(insertAt, 0, moved);
      return next;
    });
  };

  const Column = ({ status, children }: { status: string; children: React.ReactNode }) => {
    return (
      <div
        className="p-2 space-y-2 flex-grow"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          if (e.dataTransfer.getData('type') !== 'project') return;
          e.preventDefault();
          const draggedId = e.dataTransfer.getData('projectId');
          if (draggedId) handleProjectMove(draggedId, status);
        }}
      >
        {children}
      </div>
    );
  };

  return (
    <div>
      <OriginalApp />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginTop: 24 }}>
        <div>
          <h3>Not Started</h3>
          <Column status="Not Started">
            {/* your project cards here */}
          </Column>
        </div>
        <div>
          <h3>In Progress</h3>
          <Column status="In Progress">
            {/* your project cards here */}
          </Column>
        </div>
        <div>
          <h3>Done</h3>
          <Column status="Done">
            {/* your project cards here */}
          </Column>
        </div>
      </div>
    </div>
  );
}

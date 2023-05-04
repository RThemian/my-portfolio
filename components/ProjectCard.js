

function ProjectCard(props) {
  return (
    <div>
        <img 
        src={props.src} 
        width={200} 
        height={200} 
        alt={props.title} 
        />
        <h3>{props.title}</h3>
        <style jsx>{`
            h3 {
                text-align: center;
            }
        `}</style>
    </div>
  )
}

export default ProjectCard
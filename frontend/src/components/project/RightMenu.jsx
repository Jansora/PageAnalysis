/*
* @file RightMenu.jsx
* @author jansora
*/
import React, {useState} from 'react';
import {Dropdown, Icon} from "semantic-ui-react";
import Confirm from "../Confirm";
import {DeletePost} from "../../request/post";
import {DeleteProject} from "../../request/project";
import {useHistory} from "react-router-dom";
import EditProject from "./EditProject";

const RightMenu = (props) => {

  const { menus, resource, project, setProject} = props;
  const [deleteProject, setDeleteProject] = useState(false);
  const history = useHistory();
    const [openEditProject, setOpenEditProject] = useState(false)

  return (
      <React.Fragment>
        <Dropdown
            pointing="top right"
            style={{float: "right"}}
            trigger={<><Icon name='setting' size="large" /></>}
            icon={null}
        >

          <Dropdown.Menu>
              <Dropdown.Item
                    icon="edit" text="编辑项目" onClick={() => setOpenEditProject(true)}
                  />

              {
                  menus && menus.includes('delete') && <Dropdown.Item
                      onClick={() => setDeleteProject(true)} icon='trash alternate' text='删除' />
              }
          </Dropdown.Menu>
        </Dropdown>
          {
              openEditProject && <EditProject project={project} setProject={setProject} editable={true} open={openEditProject} setOpen={setOpenEditProject} />
          }
         { deleteProject && <Confirm success={()=> DeleteProject(project.id,      ()=>history.push("/project")) } content={'你确定要删除吗？'}/>}
      </React.Fragment>
  )
}
export default RightMenu;

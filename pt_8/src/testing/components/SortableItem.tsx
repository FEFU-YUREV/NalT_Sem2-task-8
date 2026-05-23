import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { ListItem, ListItemText, ListItemButton, ListItemIcon} from '@mui/material';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

interface SortableItemProps {
   item: string;
}

export function SortableItem({ item }: SortableItemProps) {
      const id = item;
      const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
      } = useSortable({ id });

      const style = {
        transform: CSS.Transform.toString(transform),
        transition,
      };

      return (
        <ListItem ref={ setNodeRef } style={ style } { ...attributes } { ...listeners } sx={{ p: 0, mb: 1, zIndex: transform ? 999 : 'auto' }}>
          <ListItemButton
              sx={{
              border: '1px solid #d2d2d7',
              borderRadius: '8px',
              bgcolor: '#fff',
              minHeight: '56px',
              boxShadow: transform ? '0 4px 12px rgba(0,0,0,0.1)' : 'none'
            }}>
            <ListItemIcon sx={{ minWidth: '36px' }}>
              <DragIndicatorIcon color="action" />
            </ListItemIcon>
            <ListItemText primary={ item } />
          </ListItemButton>
        </ListItem>
      );
    }
